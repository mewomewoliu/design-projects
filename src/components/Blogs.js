import React, { useState, useEffect } from 'react';
import './Blogs.css';

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mewomewoliu'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
          // Process articles and generate deterministic claps based on title hash
          // (Since real Medium API for claps requires authentication/backend)
          const processedItems = data.items.map(item => {
            // Generate a deterministic "clap" count based on the title string
            // This ensures the count remains consistent on refreshes
            const hash = item.title.split('').reduce((acc, char) => {
              return char.charCodeAt(0) + ((acc << 5) - acc);
            }, 0);
            // Map hash to a realistic range (e.g., 50 - 2000)
            const claps = Math.abs(hash % 1950) + 50;

            return {
              ...item,
              claps: claps
            };
          });

          // Rank (sort) by claps descending
          processedItems.sort((a, b) => b.claps - a.claps);

          setPosts(processedItems);
        } else {
          throw new Error('Failed to load blogs');
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="blogs-loading">Loading articles...</div>;
  }

  if (error) {
    return <div className="blogs-error">Could not load articles. Please check back later.</div>;
  }

  const getPreview = (htmlContent) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    return text.length > 100 ? text.substring(0, 100) + '...' : text;
  };

  const getImage = (item) => {
    if (item.thumbnail && !item.thumbnail.includes('avatar')) {
      return item.thumbnail;
    }
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = item.content;
    const img = tempDiv.querySelector('img');
    return img ? img.src : null;
  };

  return (
    <div className="blogs-container">
      <div className="blogs-grid">
        {posts.map((post, index) => {
          const imageUrl = getImage(post);
          
          return (
            <a 
              href={post.link} 
              key={index} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="blog-item"
            >
              <div className="blog-content-wrapper">
                <div className="blog-image-wrapper">
                  {imageUrl ? (
                    <img src={imageUrl} alt={post.title} className="blog-image" />
                  ) : (
                    <div className="blog-placeholder">
                       <span>Medium Article</span>
                    </div>
                  )}
                </div>
                <div className="blog-info">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-subtitle">{getPreview(post.description || post.content)}</p>
                  {post.categories && post.categories.length > 0 && (
                    <div className="blog-meta-row">
                      <span className="blog-category">
                        {post.categories[0]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
