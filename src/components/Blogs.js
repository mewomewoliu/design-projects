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
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        if (data.status === 'ok') {
          setPosts(data.items);
        } else {
          throw new Error('Failed to load blogs');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div className="blogs-state">Loading articles</div>;
  if (error)   return <div className="blogs-state blogs-state--error">Could not load articles. Check back later.</div>;

  const getExcerpt = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    return text.length > 140 ? text.slice(0, 140).trimEnd() + '…' : text;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-SE', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="blogs-list">
      {posts.map((post, index) => (
        <a
          key={index}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-row"
        >
          <span className="blog-num">{String(index + 1).padStart(2, '0')}</span>

          <div className="blog-body">
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{getExcerpt(post.description || post.content)}</p>
            {post.categories?.[0] && (
              <span className="blog-cat">{post.categories[0]}</span>
            )}
          </div>

          <div className="blog-end">
            <span className="blog-date">{formatDate(post.pubDate)}</span>
            <span className="blog-arrow" aria-hidden="true">↗</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Blogs;
