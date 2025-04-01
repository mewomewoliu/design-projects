class CaseStudyModel {
  constructor() {
    this.caseStudies = {
      'scania-helpcenter': {
        id: 'scania-helpcenter',
        title: 'Scania Help Center',
        client: 'Scania',
        role: 'UX Designer',
        time: 'Sep 2023 - Oct 2024',
        process: 'Research → Design → Test → Deliver',
        description: 'Redesigned Help Center for Seamless Support',
        credits: ['Anders Odevik', 'Moa Axelsson', 'Jonas Howding'],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/scania-helpcenter.mp4`,
        detailedIntro: '',
        sections: [
          {
            // Section 1: Context & Problem Framing
            title: "Brief",
            paragraphs: [
              "The Scania Help Center is a comprehensive support platform offering Scania customers and employees a centralized hub for essential resources, including product manuals, technical specifications, troubleshooting guides, and customer service information.",
              "To elevate the user experience, I led efforts to design an intuitive, user-friendly interface tailored to our diverse user base. Through in-depth research, I explored user needs, contexts, and pain points to ensure the design meets real-world demands. Additionally, to support users from various business units and language backgrounds, our team implemented AI-driven solutions to deliver high-quality translations. To guarantee a smooth, effective user experience, we established key performance metrics to continually monitor and enhance the Help Center’s functionality.",
              "Curious to learn more about this project? Feel free to reach out to me to learn more!"

            ],
            media: {
              type: "image",
              src: ``,
              alt: ""
            }
          },
          // Section 2: Goals & Success Criteria
          {
            title: "",
            paragraphs: [
             
            ],
            // media: {
            //   type: "image",
            //     src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-problem.png`,
            //   alt: "Music Library Problem"
            // }
          },
            // Section 3: Research & Discovery
            {
                title: "",
                paragraphs: [
            
              ],
                media: {
                  type: "image",
                src: ``,
                alt: ""
                }
          },
             // Section 4: Ideation & Conceptualization
            {
              title: "",
              paragraphs: [
               
              
              ],
                media: {
                    type: "image",
                    src: ``,
                    alt: ""
                }
            },

            // Section 5: Design Exploration & Refinement
            {
                title: "",
                paragraphs: [
                
              
              ],
                // media: {
                //     type: "image",
                //     src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-home.png`,
                //     alt: "Premium View Premium music library Full access to all premium music tracks"
                // },
                
               
          },
            // Section 6: Final Solution & Impact
            {
                title: "",
                paragraphs: [
                                
              
              ],
                // media: {
                //     type: "image",
                //     src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-premium.png`,
                //     alt: "Premium View Premium music library Full access to all premium music tracks"
                // },
          },
             // Section 7: Results & Impact
            {
                title: "",
                paragraphs: [
                    
                ],
                // media: {
                //     type: "image",
                //     src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-delete.png`,
                //     alt: "Premium View Premium music library Full access to all premium music tracks"
                // }
          },
             // Section 8: Key Learnings & Reflection
            {
                title: "",
                paragraphs: [
                
              
              ],
                // media: {
                //     type: "video",
                //     src: `${process.env.PUBLIC_URL}/media/videos/musiclibrary-demo.mp4`,
                //     alt: "Music Library Demo"
                // }
          },
             // Section 9: Future Considerations & Next Steps
            {
                title: "",
                paragraphs: [
                  
              
              ],
                // media: {
                //     type: "image",
                //     src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-premium.png`,
                //     alt: "Premium View Premium music library Full access to all premium music tracks"
                // }
            },
           
        ],
      },

      'music-library': {
        id: 'music-library',
        title: 'Music Library',
        client: 'Storykit',
        role: 'UI Design Lead',
        time: 'Dec 2022 - Mar 2023',
        process: 'Research → Design → Test → Deliver',
        description: 'Finding Your Soundtrack: A Storykit Music Makeover',
        credits: ['Shapour jahanshahi', 'Oksana Romaniuk', 'Emil Sivervík', 'Alexei', 'Marcus Nirbrant',],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/storykit.mp4`,
        detailedIntro: 'Finding Your Soundtrack: A Storykit Music Makeover',
        sections: [
          {
            // Section 1: Context & Problem Framing
            title: "The Challenge",
            paragraphs: [
              "Storykit.io is an AI-powered video creation platform, enabling teams to produce high-quality, engaging videos with ease. We knew music was essential to elevate each story, yet the existing music browser didn’t make the cut. Limited music options and a clunky search process frustrated users and slowed down their creative flow. I took on the mission to design a fresh, intuitive Music Library that would make finding the perfect track simple and enjoyable.",
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/music-library-problem.png`,
              alt: "Music Library Problem"
            }
          },
          // Section 2: Goals & Success Criteria
          {
            title: "The Vison",
            paragraphs: [
              "The vision was clear:",

              "• Make music discovery seamless: Redesign the music browser to turn track searching into a fun, fast experience.",
              "• Encourage upgrades: Highlight the perks of premium music to motivate users on free plans to upgrade.",
              "• Strengthen Storykit’s brand: Craft a UI that reflects Storykit’s distinct personality.",
            ],
            media: {
              type: "image",
                src: `${process.env.PUBLIC_URL}/media/images/storykit-vision.png`,
              alt: "Music Library Vision"
            }
          },


            // Section 3: Research & Discovery
            {
                title: "Designing the Solution",
                paragraphs: [
                  "We started with thorough research. Analyzing Storykit’s audience, studying competitors like Storyblocks, and asking big questions helped us dig deep into what users needed. Collaborative sessions with the Product Manager, developers, and QA lead aligned our team and helped prioritize features.",
                  "Key findings set our design direction:",
                ],
                media: {
                  type: "image",
                src: `${process.env.PUBLIC_URL}/media/images/storykit-solution.png`,
                alt: "Music Library Solution"
                }
          },
             // Section 4: Ideation & Conceptualization
            {
              title: "Prototyping and Testing",
              paragraphs: [
                "From sketches to high-fidelity prototypes, we mapped out the music discovery flow. To ensure the design hit the mark, we ran guerrilla testing with a group of users. Their feedback guided refinements, helping us streamline interactions, clarify CTAs, and create a seamless preview experience.",
                "Freemium users will land at the standard library, where they can browse and preview music tracks. The premium library is only accessible to paid users.",
              ],
                media: {
                    type: "image",
                    src: `${process.env.PUBLIC_URL}/media/images/storykit-standardlibrary.png`,
                    alt: "Music Library Prototyping"
                }
          },
          {
            title: "",
            paragraphs: [
             "Premium & Enterprise users will have access to the premium library, where they can browse and preview music tracks. The premium library is only accessible to paid users.",
            
            ],
              media: {
                  type: "image",
                  src: `${process.env.PUBLIC_URL}/media/images/storykit-premium.png`,
                  alt: "Music Library Prototyping"
              }
          },

            // Section 5: Design Exploration & Refinement
            {
                title: "The Final Solution & Impact",
                paragraphs: [
                  "The results were immediate and impactful:",

                  "• Saved Time: Users found tracks in less time, with a 4-minute reduction in average session duration.",
                  "• User Upgrades: In-app marketing banners contributed to 14 new premium subscriptions within two days.",
                
                
              ],
                media: {
                    type: "video",
                    src:  `${process.env.PUBLIC_URL}/media/videos/storykit.mp4`,
                    alt: "Premium View Premium music library Full access to all premium music tracks"
                },
                
               
          },
            // Section 6: Final Solution & Impact
            {
                title: "Reflections and Next Steps",
                paragraphs: [
                  "Early user testing was a game-changer, validating our design choices and revealing real user needs. Cross-functional collaboration ensured we built an experience as technically feasible as it was user-friendly. Moving forward, we’ll explore ways to bring even more personalization and brand alignment into the platform.",
              
              ],
                // media: {
                //     type: "image",
                //     src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-premium.png`,
                //     alt: "Premium View Premium music library Full access to all premium music tracks"
                // },
          },
            
           
        ],
      },
      'storykit-design-system': {
        id: 'storykit-design-system',
        title: 'Storykit Design System',
        client: 'Storykit',
        role: 'UI Design Lead',
        time: 'Dec 2022 - Mar 2023',
        process: 'Research → Design → Test → Deliver',
        description: 'Finding Your Soundtrack: A Storykit Music Makeover',
        credits: ['Shapour jahanshahi', 'Oksana Romaniuk', 'Emil Sivervík', 'Alexei', 'Marcus Nirbrant',],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/storykit.mp4`,
        detailedIntro: '',
        sections: [
          {
            title: "The Challenge",
            paragraphs: [
              "The current setup in the Storykit Admin Tool for managing user seats across agencies and clients lacks flexibility, leading to challenges in effectively managing seat allocation.",
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/storykit-create-requirements.png`,
              alt: "Storykit Create Requirements"
            }
          },


        ],

      },

      'create': {
        id: 'create',
        title: 'Storykit Create',
        client: 'Storykit',
        role: 'UI Design Lead',
        time: 'Dec 2022 - Mar 2023',
        process: 'Research → Design → Test → Deliver',
        description: 'Finding Your Soundtrack: A Storykit Music Makeover',
        credits: ['Shapour jahanshahi', 'Oksana Romaniuk', 'Emil Sivervík', 'Alexei', 'Marcus Nirbrant',],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/storykit.mp4`,
        detailedIntro: 'Finding Your Soundtrack: A Storykit Music Makeover',
        sections: [
          {
            // Section 1: Context & Problem Framing
            title: "The Challenge",
            paragraphs: [
              "The current setup in the Storykit Admin Tool for managing user seats across agencies and clients lacks flexibility, leading to challenges in effectively managing seat allocation. While an agency can set a maximum number of user seats, there are limitations in managing these seats among different clients and roles. Specifically:",
              "1. Reserved vs. Floating Seats: The need to balance reserved seats for specific clients versus allowing free-floating seats within the agency’s pool can lead to conflicts or unavailability if seat usage isn’t carefully managed.",
              "2. Role-Based Reservation Limits: Seats reserved at the agency level for specific roles (like Agency Admins or Editors) add further complexity, potentially conflicting with client allocations and leading to confusion around available seats.",
              "3. Global Seat Limit Constraints: Ensuring that the sum of all reserved, agency-level, and floating seats does not exceed the agency’s global limit creates an additional layer of complexity, often requiring manual adjustments to avoid overuse or underutilization.",    
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/storykit-create-requirements.png`,
              alt: "Storykit Create Requirements"
            }
          },
          // Section 2: Goals & Success Criteria
          {
            title: "The Scenarios ",
            paragraphs: [
              "Scenario 1: Reserved Seats",
              "If you've set a maximum number of seats and a reserved number of seats for a specific client:",
            
            ],
            media: {
              type: "image",
                src: `${process.env.PUBLIC_URL}/media/images/storykit-create-senario1.png`,
              alt: "Storykit Create Scenario 1"
            }
          },
          {
            title: " ",
            paragraphs: [
              "Scenario 2: No Reserved Seats",
              "If you haven't set a reserved number of seats for a specific client:",
            ],
            media: {
              type: "image",
                src: `${process.env.PUBLIC_URL}/media/images/storykit-create-senario2.png`,
              alt: "Storykit Create Scenario 2"
            }
          },
           // Section 2: Goals & Success Criteria
          {
            title: "How Might We?",
            paragraphs: [
             
            ],
            media: {
              type: "image",
                src: `${process.env.PUBLIC_URL}/media/images/storykit-create-hmw.png`,
              alt: "Storykit Create How Might We?"
            }
          },


            // Section 3: Research & Discovery
            {
                title: "Designing the Solution & Hypotheses",
                paragraphs: [
                  "We set out to design a solution that would allow users to:", 

                  "• Understand the hierarchical relationship between Clients and Users.",
                  "• Comprehend the significance of the number '20' as the total user limit.",
                  "• Recognize that Users can belong to multiple Clients and have specific roles within each.",
                  "• Interpret the data presented at the bottom of each Client's user list.",
                  "• Understand the roles of Agency Admins and Editors and their visibility across different Clients.",
                
              ],
                media: {
                  type: "image",
                src: `${process.env.PUBLIC_URL}/media/images/storykit-create-hmw-solution.png`,
                alt: "Storykit Create How Might We? Solution"
                }
          },
             // Section 4: Ideation & Conceptualization
            {
              title: "Prototyping and Testing",
              paragraphs: [
                "We created a prototype that would allow users to:",
                "• View the hierarchical relationship between Clients and Users.",
                "• Understand the significance of the number '20' as the total user limit.",
                "• Recognize that Users can belong to multiple Clients and have specific roles within each.",
                "• Interpret the data presented at the bottom of each Client's user list.",
                "• Understand the roles of Agency Admins and Editors and their visibility across different Clients.",
              "1. From Agency Dashboard:",
              ],
                media: {
                    type: "image",
                    src: `${process.env.PUBLIC_URL}/media/images/storykit-create-demo1.png`,
                    alt: "Storykit Create Prototyping"
                }
          },
          {
            title: "",
            paragraphs: [
            "2. From Client Dashboard:",  
              
            ],
              media: {
                  type: "image",
                  src: `${process.env.PUBLIC_URL}/media/images/storykit-create-demo2.png`,
                  alt: "Storykit Create Prototyping"
              }
          },

            // Section 5: Design Exploration & Refinement
            {
                title: "The Final Solution & Impact",
                paragraphs: [
                  "The final solution was a prototype that would allow users to:",
                  "• View the hierarchical relationship between Clients and Users.",
                  "• Understand the significance of the number '20' as the total user limit.",
                  "• Recognize that Users can belong to multiple Clients and have specific roles within each.",
                  "• Interpret the data presented at the bottom of each Client's user list.",
                  "• Understand the roles of Agency Admins and Editors and their visibility across different Clients.",
                

                  "Also, the new design improved the overall user experience by providing a more intuitive and user-friendly interface for managing user seats across clients and roles.",
              ],
                // media: {
                //     type: "video",
                //     src:  `${process.env.PUBLIC_URL}/media/videos/storykit.mp4`,
                //     alt: "Premium View Premium music library Full access to all premium music tracks"
                // },
                
               
          },
            // Section 6: Final Solution & Impact
            {
                title: "Reflections and Next Steps",
                paragraphs: [
                  "Early user testing was a game-changer, validating our design choices and revealing real user needs. Cross-functional collaboration ensured we built an experience as technically feasible as it was user-friendly. Moving forward, we’ll explore ways to bring even more personalization and brand alignment into the platform.",
              
              ],
                // media: {
                //     type: "image",
                //     src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-premium.png`,
                //     alt: "Premium View Premium music library Full access to all premium music tracks"
                // },
          },
            
           
        ],
      },

      /***********************************
       *        BBC project           *  
       ***********************************/
      'bbc': {
        id: 'bbc',
        title: 'Smart Price • Framer Prototyping',
        client: 'Blablacar',
        role: 'Product Designer',
        time: 'Jan 2022 - Jun 2022',
        process: 'Prototype → Test',
        description: 'Validating Trust in Pricing for Drivers',
        credits: ['Aleksei',],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/bbc.mp4`,
        detailedIntro: '',
        sections: [
          {
            title: "Context & Problem Framing",
            paragraphs: [
              "The challenge was to rebuild driver trust in the pricing system of BlaBlaCar by testing and refining the newly introduced 'Smart Pricing' feature. We wanted to assess how drivers responded to the updated feature, specifically focusing on similar ride comparisons to help guide their pricing decisions. The project aimed to bring transparency, ease of use, and confidence to drivers when setting their ride prices.",
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-context.png`,
            //   alt: "BBC News App Context"
            // }
          },
          {
            title: "Goals & Success Criteria",
            paragraphs: [
              "Our main goals were to:",
              "• Test Usability and Comprehension: Ensure the new pricing feature was intuitive and easy for users to understand.",
              "• Influence Pricing Decisions: Evaluate how displaying similar rides would impact drivers' pricing decisions.",
              "• Enhance Transparency: Observe users' understanding of pricing components, including BBC fees.",
              "• Collect User Insights: Gather overall feedback on the pricing feature to inform future iterations.",
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-goals.png`,
            //   alt: "BBC News App Goals and Challenges"
            // }
          },
          {
            title: "Research & Discovery",
            paragraphs: [
              "To explore these goals, we conducted six moderated user tests with BlaBlaCar drivers in France. The participants represented a range of driver experiences: newbies, casual drivers, and top drivers. Testing sessions were conducted remotely using high-fidelity prototypes, with users providing insights into their pricing motivations and how they interpreted the new features.",
              "Key Findings:",
              "• The feature was mostly well understood and easy to use, with many users considering it a helpful tool for setting prices.",
              "• However, some users found the transparency lacking, as they couldn't clearly determine whether prices included BBC fees.",
              "• The feature to display 'similar rides' had mixed influence on price setting. Some users welcomed the comparison for unusual routes, while others were skeptical of its accuracy or didn’t feel compelled to follow those prices.",
            
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-research.png`,
            //   alt: "BBC News App Research Process"
            // }
          },
          {
            title: "Ideation & Conceptualization",
            paragraphs: [
              "Our ideation process focused on improving transparency and usability, making the price-setting experience straightforward and informative:",
              "• Worst Possible Ideas: We first explored deliberately unhelpful features, such as excessive complexity in fee breakdowns. This led us to appreciate the need for simplicity and clarity.",
              "• User Motivation Themes: We identified drivers' motivations—cost recovery, solidarity, and convenience—and incorporated these into our design approach to meet diverse needs.",
              "• Interactive Elements: We developed interactive elements like adjustable price sliders and transparent pricing tags that provided feedback, making pricing adjustments feel more in drivers' control.",
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-ideation.png`,
            //   alt: "BBC News App Ideation Process"
            // }
          },
          {
            title: "Design Exploration & Refinement",
            paragraphs: [
              "The iterative design process included:",
              "• Low-Fidelity Sketches: Rough sketches of pricing elements that emphasized simplicity.",
              "• User Testing: Early versions of the feature were tested using Think Aloud sessions to gather immediate reactions. Users provided valuable feedback on what worked and what was confusing.",
              "• High-Fidelity Prototypes: We integrated user feedback into a polished prototype, ensuring that each element—such as 'similar rides' and price sliders—met the needs of drivers across various experience levels.",
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-design-process.png`,
            //   alt: "BBC News App Design Process"
            // }
          },
          {
            title: "Final Solution & Impact",
            paragraphs: [
              "The final 'Smart Pricing' feature includes:",
              "• Similar Rides Display: A comparison tool for drivers to view how similar routes are priced, aimed at helping them make informed decisions.",
              "• Interactive Price Slider: Users can easily adjust their price while seeing indicators of whether it's below, within, or above the recommended range.",
              "• Clear Tags: Visual tags inform drivers about their price position relative to similar rides, adding a layer of transparency.",
            ],
            // media: {
            //   type: "video",
            //   src: `${process.env.PUBLIC_URL}/media/videos/bbc-features-demo.mp4`,
            //   alt: "BBC News App Key Features Demo"
            // }
          },
          {
            title: "Results & Impact",
            paragraphs: [
              "Ease of Use: The new pricing feature was well received, with most users finding it straightforward to adjust prices using the new tools.",
              "Mixed Influence on Pricing Decisions: While the 'similar rides' comparison helped some drivers make decisions, others continued to use their own logic (such as fuel costs or solidarity).",
              "Transparency Concerns: Users expressed a desire for clearer information about BBC fees, indicating that more transparency is needed in future iterations.",
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-impact.png`,
            //   alt: "BBC News App Redesign Impact"
            // }
          },
          {
            title: "Key Learnings & Reflection",
            paragraphs: [
              "Transparency is Crucial: Drivers need to understand exactly what makes up the ride price. Lack of clarity around fees diminished trust in the feature.",
              "User Autonomy: While tools for comparison are useful, many users ultimately rely on their instincts and experience. Designing for flexibility was key.",
              "Usability and Testing: Testing with diverse driver categories highlighted varying needs, showing that one-size-fits-all solutions aren't sufficient.",
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-learnings.png`,
            //   alt: "BBC News App Key Learnings"
            // }
          },
          {
            title: "Future Considerations & Next Steps",
            paragraphs: [
              "Moving forward, we plan to:",
              "• Enhance Transparency: Include more explicit details on BBC fees to help drivers understand their pricing options better.",
              "• Improve 'Similar Rides' Relevance: Expand the number of comparisons available to users, making it easier to trust the recommendations.",
              "• Personalize Pricing Guidance: Develop personalized insights based on drivers' past ride data to make pricing suggestions more relevant.",
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-future.png`,
            //   alt: "BBC News App Future Considerations"
            // }
          }
        ],
      },
      /***********************************
       *        Blankt project           *  
       ***********************************/
      'blankt-web': {
        id: 'blankt-web',
        title: 'blankt Web design',
        client: 'blankt',
        role: 'UX & UI Design & Front-end Development',
        time: 'December  2021 — September 2022',
        process: 'Research → Ideation → Design → Prototype → Test',
        description: 'Redefining Poster Shopping with a Fun Customization Experience',
        credits: ['Max He'],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/blankt.mp4`,
        detailedIntro: 'The BBC News app redesign project aimed to modernize the user interface, improve content discovery, and enhance the overall user experience for millions of global users.',
        sections: [
          {
            title: "Introduction (Context & Problem Framing)",
            paragraphs: [
              "Blankt Group AB, a creative poster retailer based in Stockholm, offers customized posters to bring customers' ideas to life. To launch their new online shopping platform, Blankt wanted to integrate an innovative graphic editing tool, revolutionizing how customers design and buy posters. The challenge? Build an engaging design that meets both business needs and customer desires, making the experience fun and easy.",

            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-context.png`,
            //   alt: "BBC News App Context"
            // }
          },
          {
            title: "Goals & Success Criteria",
            paragraphs: [
              "Our main goals were:",
              "• Translate Vision into Design: Create a seamless shopping experience that reflected Blankt's core values of creativity and customization.",
              "• Enhance Customer Experience: Make the customization process intuitive and enjoyable for users.",
              "• Strengthen Brand Identity: Ensure the design showcased Blankt’s unique personality and creativity.",
              "• Validate with Real Users: Test and refine designs based on user feedback to ensure we hit the mark.",
              
             ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-problem.png`,
            //   alt: "BBC News App Problems"
            // }
          },
          {
            title: "Research & Discovery",
            paragraphs: [
              "We began by digging into the e-commerce landscape, customer shopping behaviors, and users' needs when designing posters. Through user research and competitive analysis, we discovered:",
              "• Customers Want Creative Freedom: Users wanted more control over poster design but without a complex interface.",
              "• Simplified Experience is Key: Complex customization tools deter users—simplicity and power needed to coexist.",
              "• Brand Consistency Matters: Users wanted a creative experience that felt like Blankt—bold, fun, and inspiring.",
            
            
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-design-process.png`,
            //   alt: "BBC News App Design Process"
            // }
          },
          {
            title: "Ideation & Conceptualization",
            paragraphs: [
              "In this phase, we aimed to balance creativity with ease of use. Here’s what we did:",
              "• Concept Sketches: Quickly visualized the user journey for browsing, selecting, and customizing posters.",
              "• Wireframes and User Flows: Mapped out the entire customer journey to ensure a smooth process from start to finish.", 
              "• Collaborative Sessions: Worked with Blankt's team to align on business goals and ensure the design direction delivered on both creativity and user needs.",            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/blankt-editor.png`,
              alt: "Blankt Editor"
            }
          },
          {
            title: "Design Exploration & Refinement",
            paragraphs: [
              "The design process was all about iteration, learning, and improvement:",
              "• Prototyping: Created high-fidelity prototypes to showcase the customization journey, making it visually appealing yet easy to navigate.",
              "• User Testing: Put the prototypes in users' hands. They navigated the platform, customized posters, and provided valuable feedback.",
              "• Refinement: We listened to users and made changes, from tweaking the layout to simplifying navigation, resulting in a polished product that was intuitive and fun.",
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/blankt-home.png`,
              alt: "Blankt Home"
            }
          },
          {
            title: "Final Solution & Impact",
            paragraphs: [
              "The final product was a vibrant e-commerce platform with an integrated poster customization tool that featured:",
              "• Easy-to-Use Interface: Users could effortlessly create and customize posters with simple navigation and real-time editing.",
              "• Seamless User Journey: The entire process, from browsing to checkout, was designed to be immersive and frictionless.", 
              "• Brand-Aligned Visuals: The design captured Blankt's creative spirit with bold visuals, making it stand out in the market.",
              
            ],
          },
          {
            title: "7. Results & Impact",
            paragraphs: [
              "Positive User Feedback: Usability testing showed high satisfaction. Users loved the ease of customization and creative control.",
              "Stronger Brand Identity: The visual design enhanced Blankt's brand recognition, establishing a strong emotional connection with users.",
              "Smooth Development Handoff: Using Figma made collaboration with developers seamless, speeding up implementation and boosting productivity.",
            
            ],
          },
          {
            title: "8. Key Learnings & Reflection",
            paragraphs: [
              "Creativity Meets Simplicity: The biggest challenge was creating a customization tool that was powerful but not overwhelming. We learned that clear user flows and real-time feedback are key to maintaining simplicity.",
              "User Testing is Essential: Regular usability testing was crucial to refine the product and ensure it resonated with users.",
              "Collaboration Drives Success: Working closely with developers and stakeholders helped us create a feasible design without compromising creativity.",
              "Future Considerations: We'd like to expand the customization options, implement user feedback, and continue collaborating with clients to ensure the design meets both business goals and user needs.",
            ]
          },
          {
            title: "9. Future Considerations & Next Steps",
            paragraphs: [
              "More Customization Options: Add new design elements and collaborative features, allowing users to get even more creative.",
              "Enhanced Personalization: Use AI-driven recommendations to personalize the experience, making it even more engaging.",
              "Optimize for Mobile: Ensure the customization tool works as smoothly on mobile as it does on desktop, keeping users engaged anywhere.",
            
            ]
          },


        ]
      },

        /***********************************
       *        Blankt Mobile project           *  
       ***********************************/
      'blankt-mobile': {
        id: 'blankt-mobile',
        title: 'blankt Mobile design',
        client: 'blankt AB',
        role: 'UX/UI Design Lead',
        time: 'Jan 2023 - Jun 2023',
        process: 'Research → Ideation → Design → Prototype → Test',
        description: 'Redefining Poster Shopping with a Fun Customization Experience',
        credits: ['Max He',],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/blanktmobile.mp4`,
        detailedIntro: 'The BBC News app redesign project aimed to modernize the user interface, improve content discovery, and enhance the overall user experience for millions of global users.',
        sections: [
          {
            title: "Introduction (Context & Problem Framing)",
            paragraphs: [
              "Blankt Group AB, a creative poster retailer based in Stockholm, offers customized posters to bring customers' ideas to life. To launch their new online shopping platform, Blankt wanted to integrate an innovative graphic editing tool, revolutionizing how customers design and buy posters. The challenge? Build an engaging design that meets both business needs and customer desires, making the experience fun and easy.",

            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-context.png`,
            //   alt: "BBC News App Context"
            // }
          },
          {
            title: "Goals & Success Criteria",
            paragraphs: [
              "Our main goals were:",
              "• Translate Vision into Design: Create a seamless shopping experience that reflected Blankt's core values of creativity and customization.",
              "• Enhance Customer Experience: Make the customization process intuitive and enjoyable for users.",
              "• Strengthen Brand Identity: Ensure the design showcased Blankt’s unique personality and creativity.",
              "• Validate with Real Users: Test and refine designs based on user feedback to ensure we hit the mark.",
              
             ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-problem.png`,
            //   alt: "BBC News App Problems"
            // }
          },
          {
            title: "Research & Discovery",
            paragraphs: [
              "We began by digging into the e-commerce landscape, customer shopping behaviors, and users' needs when designing posters. Through user research and competitive analysis, we discovered:",
              "• Customers Want Creative Freedom: Users wanted more control over poster design but without a complex interface.",
              "• Simplified Experience is Key: Complex customization tools deter users—simplicity and power needed to coexist.",
              "• Brand Consistency Matters: Users wanted a creative experience that felt like Blankt—bold, fun, and inspiring.",
            
            
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-design-process.png`,
            //   alt: "BBC News App Design Process"
            // }
          },
          {
            title: "Ideation & Conceptualization",
            paragraphs: [
              "In this phase, we aimed to balance creativity with ease of use. Here’s what we did:",
              "• Concept Sketches: Quickly visualized the user journey for browsing, selecting, and customizing posters.",
              "• Wireframes and User Flows: Mapped out the entire customer journey to ensure a smooth process from start to finish.", 
              "• Collaborative Sessions: Worked with Blankt's team to align on business goals and ensure the design direction delivered on both creativity and user needs.",            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/blankt-mobile-editor.png`,
              alt: "Blankt Mobile Editor"
            }
          },
          {
            title: "5. Design Exploration & Refinement",
            paragraphs: [
              "The design process was all about iteration, learning, and improvement:",
              "• Prototyping: Created high-fidelity prototypes to showcase the customization journey, making it visually appealing yet easy to navigate.",
              "• User Testing: Put the prototypes in users' hands. They navigated the platform, customized posters, and provided valuable feedback.",
              "• Refinement: We listened to users and made changes, from tweaking the layout to simplifying navigation, resulting in a polished product that was intuitive and fun.",
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/blankt-mobile-shopping.png`,
              alt: "Blankt Mobile Shopping Cart"
            }
          },
          {
            title: "Final Solution & Impact",
            paragraphs: [
              "The final product was a vibrant e-commerce platform with an integrated poster customization tool that featured:",
              "• Easy-to-Use Interface: Users could effortlessly create and customize posters with simple navigation and real-time editing.",
              "• Seamless User Journey: The entire process, from browsing to checkout, was designed to be immersive and frictionless.", 
              "• Brand-Aligned Visuals: The design captured Blankt's creative spirit with bold visuals, making it stand out in the market.",
              
            ],
          },
          {
            title: "Results & Impact",
            paragraphs: [
              "Positive User Feedback: Usability testing showed high satisfaction. Users loved the ease of customization and creative control.",
              "Stronger Brand Identity: The visual design enhanced Blankt's brand recognition, establishing a strong emotional connection with users.",
              "Smooth Development Handoff: Using Figma made collaboration with developers seamless, speeding up implementation and boosting productivity.",
            
            ],
          },
          {
            title: "Key Learnings & Reflection",
            paragraphs: [
              "Creativity Meets Simplicity: The biggest challenge was creating a customization tool that was powerful but not overwhelming. We learned that clear user flows and real-time feedback are key to maintaining simplicity.",
              "User Testing is Essential: Regular usability testing was crucial to refine the product and ensure it resonated with users.",
              "Collaboration Drives Success: Working closely with developers and stakeholders helped us create a feasible design without compromising creativity.",
              "Future Considerations: We'd like to expand the customization options, implement user feedback, and continue collaborating with clients to ensure the design meets both business goals and user needs.",
            ]
          },
          {
            title: "Future Considerations & Next Steps",
            paragraphs: [
              "More Customization Options: Add new design elements and collaborative features, allowing users to get even more creative.",
              "Enhanced Personalization: Use AI-driven recommendations to personalize the experience, making it even more engaging.",
              "Optimize for Mobile: Ensure the customization tool works as smoothly on mobile as it does on desktop, keeping users engaged anywhere.",
            
            ]
          },
        ]
      },

        /***********************************
       *        Blankt Home project           *  
       ***********************************/
      'blankt-home': {
        id: 'blankt-home',
        title: 'blankt Home design',
        client: 'blankt',
        role: 'UX/UI Design Lead',
        time: 'Jan 2023 - Jun 2023',
        process: 'Research → Ideation → Design → Prototype → Test',
        description: 'Redefining Poster Shopping with a Fun Customization Experience',
        credits: ['Max He'],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/blankthome.mp4`,
        detailedIntro: 'The BBC News app redesign project aimed to modernize the user interface, improve content discovery, and enhance the overall user experience for millions of global users.',
        sections: [
          {
            title: "Introduction (Context & Problem Framing)",
            paragraphs: [
              "Blankt Group AB, a creative poster retailer based in Stockholm, offers customized posters to bring customers' ideas to life. To launch their new online shopping platform, Blankt wanted to integrate an innovative graphic editing tool, revolutionizing how customers design and buy posters. The challenge? Build an engaging design that meets both business needs and customer desires, making the experience fun and easy.",

            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-context.png`,
            //   alt: "BBC News App Context"
            // }
          },
          {
            title: "Goals & Success Criteria",
            paragraphs: [
              "Our main goals were:",
              "• Translate Vision into Design: Create a seamless shopping experience that reflected Blankt's core values of creativity and customization.",
              "• Enhance Customer Experience: Make the customization process intuitive and enjoyable for users.",
              "• Strengthen Brand Identity: Ensure the design showcased Blankt’s unique personality and creativity.",
              "• Validate with Real Users: Test and refine designs based on user feedback to ensure we hit the mark.",
              
             ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-problem.png`,
            //   alt: "BBC News App Problems"
            // }
          },
          {
            title: "Research & Discovery",
            paragraphs: [
              "We began by digging into the e-commerce landscape, customer shopping behaviors, and users' needs when designing posters. Through user research and competitive analysis, we discovered:",
              "• Customers Want Creative Freedom: Users wanted more control over poster design but without a complex interface.",
              "• Simplified Experience is Key: Complex customization tools deter users—simplicity and power needed to coexist.",
              "• Brand Consistency Matters: Users wanted a creative experience that felt like Blankt—bold, fun, and inspiring.",
            
            
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/bbc-design-process.png`,
            //   alt: "BBC News App Design Process"
            // }
          },
          {
            title: "Ideation & Conceptualization",
            paragraphs: [
              "In this phase, we aimed to balance creativity with ease of use. Here’s what we did:",
              "• Concept Sketches: Quickly visualized the user journey for browsing, selecting, and customizing posters.",
              "• Wireframes and User Flows: Mapped out the entire customer journey to ensure a smooth process from start to finish.", 
              "• Collaborative Sessions: Worked with Blankt's team to align on business goals and ensure the design direction delivered on both creativity and user needs.",            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/blankt-home.png`,
              alt: "Blankt Home page"
            }
          },
          {
            title: "Design Exploration & Refinement",
            paragraphs: [
              "The design process was all about iteration, learning, and improvement:",
              "• Prototyping: Created high-fidelity prototypes to showcase the customization journey, making it visually appealing yet easy to navigate.",
              "• User Testing: Put the prototypes in users' hands. They navigated the platform, customized posters, and provided valuable feedback.",
              "• Refinement: We listened to users and made changes, from tweaking the layout to simplifying navigation, resulting in a polished product that was intuitive and fun.",
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/blankt-mobile-home.png`,
            //   alt: "Blankt Home"
            // }
          },
          {
            title: "Final Solution & Impact",
            paragraphs: [
              "The final product was a vibrant e-commerce platform with an integrated poster customization tool that featured:",
              "• Easy-to-Use Interface: Users could effortlessly create and customize posters with simple navigation and real-time editing.",
              "• Seamless User Journey: The entire process, from browsing to checkout, was designed to be immersive and frictionless.", 
              "• Brand-Aligned Visuals: The design captured Blankt's creative spirit with bold visuals, making it stand out in the market.",
              
            ],
          },
          {
            title: "Results & Impact",
            paragraphs: [
              "Positive User Feedback: Usability testing showed high satisfaction. Users loved the ease of customization and creative control.",
              "Stronger Brand Identity: The visual design enhanced Blankt's brand recognition, establishing a strong emotional connection with users.",
              "Smooth Development Handoff: Using Figma made collaboration with developers seamless, speeding up implementation and boosting productivity.",
            
            ],
          },
          {
            title: "Key Learnings & Reflection",
            paragraphs: [
              "Creativity Meets Simplicity: The biggest challenge was creating a customization tool that was powerful but not overwhelming. We learned that clear user flows and real-time feedback are key to maintaining simplicity.",
              "User Testing is Essential: Regular usability testing was crucial to refine the product and ensure it resonated with users.",
              "Collaboration Drives Success: Working closely with developers and stakeholders helped us create a feasible design without compromising creativity.",
              "Future Considerations: We'd like to expand the customization options, implement user feedback, and continue collaborating with clients to ensure the design meets both business goals and user needs.",
            ]
          },
          {
            title: "Future Considerations & Next Steps",
            paragraphs: [
              "More Customization Options: Add new design elements and collaborative features, allowing users to get even more creative.",
              "Enhanced Personalization: Use AI-driven recommendations to personalize the experience, making it even more engaging.",
              "Optimize for Mobile: Ensure the customization tool works as smoothly on mobile as it does on desktop, keeping users engaged anywhere.",
            
            ]
          },


        ]
      },

      /***********************************
       *        Yourbeet Web project           *  
       ***********************************/
      'yourbeetweb': {
        id: 'yourbeetweb',
        title: 'Yourbeet Web design',
        client: 'Yourbeet',
        role: 'UX & UI Research and Design',
        time: 'March 2021 — August 2021',
        process: 'Research → Ideation → Design → Prototype → Test',
        description: 'Turning Plant-Based Eating into a Fun, Delicious Adventure',
        credits: ['Anna', 'Annisia'],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/beet.mp4`,
        detailedIntro: '',
        sections: [
          {
            title: "Introduction (Context & Problem Framing)",
            paragraphs: [
              "Plant-based diets are great for your health and the planet, but let's be honest—they're not always easy to stick with. Many people struggle with finding balanced nutrition, variety, and time to plan meals. Your Beet was designed to change all that. Our mission? To create a fun, easy-to-use mobile app that makes adopting a plant-based lifestyle not only simple but also enjoyable, while helping users reduce their CO2 footprint."
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeet-problem.png`,
              alt: "Yourbeet Problem"
            }
          },
          {
            title: "Goals & Success Criteria",
            paragraphs: [
              "Our main goals were:",
              "• Make Plant-Based Eating Easy: Provide a personalized meal-planning app that makes plant-based eating accessible to everyone.",
              "• Promote Sustainability: Empower users to understand their food’s impact on the environment and inspire sustainable choices.",
              "• Create a Fun Experience: Make meal planning interactive, engaging, and easy to stick with.",
              "• Validate and Iterate: Test the app’s usability and refine it to ensure we meet users’ dietary goals.",
              
              
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeet-home.png`,
              alt: "Yourbeet Home"
            }
          },
          {
            title: "Research & Discovery",
            paragraphs: [
              "We kicked off with in-depth research: user interviews, market analysis, and climate impact studies. Here’s what we found:",
              "Plant-Based Struggles: People often quit plant-based diets because it's hard to maintain balanced nutrition and variety.",
              "Need for Guidance: Users wanted tailored meal recommendations that fit their needs and lifestyle.",
              "Environmental Motivation: Users were inspired by sustainability but needed a clearer picture of how their food choices impacted the environment.",  
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/yourbeet-problem.png`,
            //   alt: "Yourbeet Problem"
            // }
          },
          {
            title: "Ideation & Conceptualization",
            paragraphs: [
              "With these insights, we brainstormed ways to make plant-based eating fun and easy:",
              "Persona Development: We created personas like Ellinor (busy mom), Ana (vegetarian student), and Wendy (nutritionist) to keep our focus user-centric.",
              "How Might We Questions: We asked, “How might we make meal planning enjoyable?” and “How can we help users track nutrition and environmental impact?”",
              "Wireframes & Sketches: Drafted wireframes to outline the core features—customized meal plans, CO2 tracking, and nutritional insights.",
              
              
              
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeetweb.png`,
              alt: "Yourbeet Web Design"
            }
          },
          {
            title: "Design Exploration & Refinement",
            paragraphs: [
              "The design process was a journey of creativity and iteration:",
              "User Testing: We ran usability tests to understand how users interacted with the app and identified areas that needed improvement.",
              "Prototyping: Built high-fidelity prototypes in Figma to make sure every detail was visually appealing and easy to navigate.",
              "Feedback Integration: Users found some metrics confusing, like the CO2 impact. We simplified it by adding easy-to-understand visuals and explanations.",
            
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeet-demo.png`,
              alt: "Yourbeet Login"
            }
          },
          {
            title: "Final Solution & Impact",
            paragraphs: [
              "The final product, Your Beet, is a mobile app designed to:",
              "• Offer Personalized Plant-Based Recipes: Users get meal recommendations tailored to their nutritional needs, making it easy to eat balanced and delicious plant-based meals.",
              "• Track CO2 Impact: Unique CO2 tracking shows users the environmental impact of their choices, motivating them to make greener decisions.",
              "• Make Meal Planning Fun: Swiping to select recipes, personalized quizzes, and daily reminders keep the experience interactive and enjoyable.",
              
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/yourbeet-seq.png`,
            //   alt: "Yourbeet SEQ"
            // }
          },
          {
            title: "Results & Impact",
            paragraphs: [
              "High User Satisfaction: Our usability testing scored 5.8 out of 7 for ease of use. Users loved the personalization and found the app intuitive.",
              "More Engagement: Fun features like swiping and tracking CO2 impact kept users hooked and motivated.",
              "Positive Behavior Change: Users felt more confident about their dietary choices and the impact they had on the planet.",
              
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeet-seq.png`,
              alt: "Yourbeet SEQ"
            }
          },
          {
            title: "Key Learnings & Reflection",
            paragraphs: [
              "Simplicity is Key: Even small UI details can make or break the experience. Simplifying icons and terms helped a lot.",
              "Consistency is Crucial: Maintaining a consistent look and feel throughout the app boosted user trust and understanding.",
              "Sustainability Can Be Fun: By gamifying sustainable eating, we made it easier for users to stick with plant-based habits.",
            
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/yourbeet-seq.png`,
            //   alt: "Yourbeet SEQ"
            // }
          },
          {
            title: "Future Considerations & Next Steps",
            paragraphs: [
              "Improve Accessibility: Make text easier to read and include color-blind friendly options for better inclusivity.",
              "Expand Customization: Add more recipe customization options to cater to different tastes and dietary needs.",
              "Community Features: Introduce features like recipe sharing to build community and keep users inspired.",
              
            
            ],
          }
        ]
      },

      /***********************************
       *        Yourbeet Mobile project           *  
       ***********************************/
      'yourbeetmobile': {
        id: 'yourbeetmobile',
        title: 'Yourbeet Mobile design',
        client: 'Yourbeet',
        role: 'UX & UI Research and Design',
        time: 'March 2021 — August 2021',
        process: 'Research → Ideation → Design → Prototype → Test',
        description: 'Turning Plant-Based Eating into a Fun, Delicious Adventure',
        credits: ['Anna', 'Annisia'],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/beet.mp4`,
        detailedIntro: '',
        sections: [
          {
            title: "Introduction (Context & Problem Framing)",
            paragraphs: [
              "Plant-based diets are great for your health and the planet, but let's be honest—they're not always easy to stick with. Many people struggle with finding balanced nutrition, variety, and time to plan meals. Your Beet was designed to change all that. Our mission? To create a fun, easy-to-use mobile app that makes adopting a plant-based lifestyle not only simple but also enjoyable, while helping users reduce their CO2 footprint."
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeet-problem.png`,
              alt: "Yourbeet Problem"
            }
          },
          {
            title: "Goals & Success Criteria",
            paragraphs: [
              "Our main goals were:",
              "• Make Plant-Based Eating Easy: Provide a personalized meal-planning app that makes plant-based eating accessible to everyone.",
              "• Promote Sustainability: Empower users to understand their food’s impact on the environment and inspire sustainable choices.",
              "• Create a Fun Experience: Make meal planning interactive, engaging, and easy to stick with.",
              "• Validate and Iterate: Test the app’s usability and refine it to ensure we meet users’ dietary goals.",
              
              
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeet-home.png`,
              alt: "Yourbeet Home"
            }
          },
          {
            title: "Research & Discovery",
            paragraphs: [
              "We kicked off with in-depth research: user interviews, market analysis, and climate impact studies. Here’s what we found:",
              "Plant-Based Struggles: People often quit plant-based diets because it's hard to maintain balanced nutrition and variety.",
              "Need for Guidance: Users wanted tailored meal recommendations that fit their needs and lifestyle.",
              "Environmental Motivation: Users were inspired by sustainability but needed a clearer picture of how their food choices impacted the environment.",  
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/yourbeet-problem.png`,
            //   alt: "Yourbeet Problem"
            // }
          },
          {
            title: "Ideation & Conceptualization",
            paragraphs: [
              "With these insights, we brainstormed ways to make plant-based eating fun and easy:",
              "Persona Development: We created personas like Ellinor (busy mom), Ana (vegetarian student), and Wendy (nutritionist) to keep our focus user-centric.",
              "How Might We Questions: We asked, “How might we make meal planning enjoyable?” and “How can we help users track nutrition and environmental impact?”",
              "Wireframes & Sketches: Drafted wireframes to outline the core features—customized meal plans, CO2 tracking, and nutritional insights.",
              
              
              
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeetweb.png`,
              alt: "Yourbeet Web Design"
            }
          },
          {
            title: "Design Exploration & Refinement",
            paragraphs: [
              "The design process was a journey of creativity and iteration:",
              "User Testing: We ran usability tests to understand how users interacted with the app and identified areas that needed improvement.",
              "Prototyping: Built high-fidelity prototypes in Figma to make sure every detail was visually appealing and easy to navigate.",
              "Feedback Integration: Users found some metrics confusing, like the CO2 impact. We simplified it by adding easy-to-understand visuals and explanations.",
            
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeet-demo.png`,
              alt: "Yourbeet Login"
            }
          },
          {
            title: "Final Solution & Impact",
            paragraphs: [
              "The final product, Your Beet, is a mobile app designed to:",
              "• Offer Personalized Plant-Based Recipes: Users get meal recommendations tailored to their nutritional needs, making it easy to eat balanced and delicious plant-based meals.",
              "• Track CO2 Impact: Unique CO2 tracking shows users the environmental impact of their choices, motivating them to make greener decisions.",
              "• Make Meal Planning Fun: Swiping to select recipes, personalized quizzes, and daily reminders keep the experience interactive and enjoyable.",
              
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/yourbeet-seq.png`,
            //   alt: "Yourbeet SEQ"
            // }
          },
          {
            title: "Results & Impact",
            paragraphs: [
              "High User Satisfaction: Our usability testing scored 5.8 out of 7 for ease of use. Users loved the personalization and found the app intuitive.",
              "More Engagement: Fun features like swiping and tracking CO2 impact kept users hooked and motivated.",
              "Positive Behavior Change: Users felt more confident about their dietary choices and the impact they had on the planet.",
              
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/yourbeet-seq.png`,
              alt: "Yourbeet SEQ"
            }
          },
          {
            title: "Key Learnings & Reflection",
            paragraphs: [
              "Simplicity is Key: Even small UI details can make or break the experience. Simplifying icons and terms helped a lot.",
              "Consistency is Crucial: Maintaining a consistent look and feel throughout the app boosted user trust and understanding.",
              "Sustainability Can Be Fun: By gamifying sustainable eating, we made it easier for users to stick with plant-based habits.",
            
            ],
            // media: {
            //   type: "image",
            //   src: `${process.env.PUBLIC_URL}/media/images/yourbeet-seq.png`,
            //   alt: "Yourbeet SEQ"
            // }
          },
          {
            title: "Future Considerations & Next Steps",
            paragraphs: [
              "Improve Accessibility: Make text easier to read and include color-blind friendly options for better inclusivity.",
              "Expand Customization: Add more recipe customization options to cater to different tastes and dietary needs.",
              "Community Features: Introduce features like recipe sharing to build community and keep users inspired.",
              
            
            ],
          }
        ]
      },

       /***********************************
       *        Music Mash project           *  
       ***********************************/
       'music-mash': {
        id: 'music-mash',
        title: 'Music Mash',
        client: 'School project',
        role: 'UX/UI Designer, UI Engineer',
        time: 'March - June 2021',
        process: 'Research → Ideation → Design → Prototype → Test',
        description: 'MusicMash: Turning DJ Fear into Collective Fun at Parties',
        credits: ['Damitha', 'Katerina', 'Andreaee', 'Bob Williams'],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/music-mash-demo.mp4`,
        detailedIntro: 'MusicMash: Turning DJ Fear into Collective Fun at Parties',
        sections: [
          {
            title: "Introduction (Context & Problem Framing)",
            paragraphs: [
              "Imagine being asked to DJ at a party—exciting for some, nerve-wracking for many. We found that most people dread being judged for their music choices and fear the party could flop because of their playlists. MusicMash aims to change that by shifting DJ pressure from one person to a collective, making music selection a fun, shared experience for everyone.",
              "We interviewed 12 people aged 21-28 who had recently thrown parties or played DJ. Ten of them admitted feeling nervous as DJs due to fear of judgment or disappointing guests. They worried their music taste would be criticized, or worse, ruin the party vibe. To avoid scrutiny, some DJs opted to play generic, recommended songs on Spotify instead of making personalized playlists. Clearly, the joy of DJing was overshadowed by fear.",
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/music-mash.png`,
              alt: "Music Mash"
            }
          },
          {
            title: "Goals & Success Criteria",
            paragraphs: [
              "Our key goals were:",
              "• Reduce DJ Pressure: Create a way to ease the stress of being the sole DJ at a party.",
              "• Encourage Guest Participation: Make music selection a group effort, with everyone contributing to the playlist.",
              "• Boost Enjoyment: Ensure all partygoers feel more connected and satisfied through collective music choices.",
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/music-mash-persona.png`,
              alt: "Music Mash Persona"
            }
          },

          {
            title: "Research & Discovery",
            paragraphs: [
              "• We began with interviews to dig deeper into party music dynamics. We found that people loved using Spotify but struggled with the 'Session' feature's limitations. The insights from our research included:",
              "• Fear of Judgment: People often feel their music taste will be judged, creating anxiety around DJing.",
              "• Limited Tools for Parties: Spotify's 'Session' feature didn't fully address the needs of parties, leading users to stick with simple shared playlists.",
              "• Desire for Shared Control: Partygoers wanted more control, wishing to contribute their favorite songs and hear others' recommendations.",
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/music-mash-problem.png`,
              alt: "Music Mash Problem"
            }
          },
          {
            title: "Ideation & Conceptualization",
            paragraphs: [
              "Our design process focused on answering the question:",
              "How might we help party DJs to engage all party participants by playing music that everyone feels satisfied with?",
              "How might we relieve the DJ-ing pressure off of one person in a social context?",
              "How might we motivate introverts to contribute their music at a party (and therefore help them connect with people)?",
              
              "To solve this, we went through several steps:",
              "• Worst Possible Ideas: We began by brainstorming deliberately terrible ideas, such as forcing every guest to recommend a song or adding penalties for not contributing. This led us to more creative and practical solutions.",
              "• Key Themes: We narrowed down our ideas into four main themes: Feedback, Motivation, Order, and Contribution.",
              "• Brainwriting Solutions: We used brainwriting to develop features, including collective playlist creation, voting on songs, and 'smart shuffling' based on guest preferences.",
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/music-mash-hmv.png`,
              alt: "Music Mash HMV"
            }
          },
          {
            title: "Design Exploration & Refinement",
            paragraphs: [
              "We drafted a user journey to show how MusicMash could work at a party. We then moved from low-fidelity sketches to a fully interactive hi-fi prototype, refining along the way based on user testing. We conducted guerrilla tests and Think Aloud sessions to identify areas for improvement.",
              "Low-Fi Sketches: We sketched out screens for creating and joining party sessions.",
              "User Journey: We illustrated the flow, from inviting guests to adding and voting on songs.",
              "High-Fi Prototype: Based on feedback, we finalized a high-fidelity prototype, emphasizing ease of use and party vibes with a dark theme.",
              
            ],
            
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/music-mash-wire.png`,
              alt: "Music Mash Wireframe"
            }
          },
          {
            title: "Final Solution & Impact",
            paragraphs: [
              "We designed a new feature for Spotify called MusicMash. This feature allows party DJs to create a collective party session where everyone can contribute songs to the playlist. Guests can vote on songs, helping shape the order of the playlist in real time. This turns DJing into a group activity where everyone gets a say, ensuring no one feels left out, and the party vibe stays alive.",
              "Key Features",
              "Collective Playlist: DJs and guests can add and vote on songs.",
              "Genre-Based Recommendations: DJs can pick a party theme, and MusicMash will recommend fitting tracks.",
              "Real-Time Voting: Guests can upvote or downvote tracks, ensuring the playlist reflects the group's tastes.",
             
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/music-mash-home.png`,
              alt: "Music Mash Homepage"
            }
          },
          {
            title: "Results & Impact",
            paragraphs: [
              "Reduced DJ Anxiety: Guests reported feeling more comfortable contributing to the music selection, reducing the pressure on a single DJ.",
              "Higher Engagement: Parties using MusicMash saw increased participation, with guests actively adding songs and voting on the playlist.",
              "Improved Party Experience: Partygoers said the collaborative aspect made the experience more enjoyable and helped keep the energy high throughout the event.",
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/music-mash-design.png`,
              alt: "Music Mash User Testing"
            }
          },
          
          {
            title: "Key Learnings & Reflection",
            paragraphs: [
              "Collaboration is Key: Encouraging shared control over the music helped ease anxiety and boosted overall enjoyment.",
              "Iterative Design: Testing and iterating was essential to make MusicMash a feature that truly resonated with users.",
              "Keep it Fun: Making the process playful, like allowing voting and incorporating creative features, made all the difference in turning a stressful task into a fun one.",
            ],
            
          }
        ]
      },
       
       'bbc-design-system': {
        id: 'bbc-design-system',
        title: 'BBC Design System',
        client: 'BBC',
        role: 'Product Designer Prototyper',
        time: 'Dec 2021 - Jul 2022',
        process: 'Stakeholder Workshop → Design System → Prototype',
        description: 'Blablacar Pixar Design System • Customer Success',
        credits: ['Aleksei'],
        imageSrc: `${process.env.PUBLIC_URL}/media/images/bbc-designsystem-cover.png`,
        detailedIntro: 'Blablacar Customer Success team needed a design system to help them maintain consistent communication with Blablacar customers.',
        sections: [
          {
            title: "Demo",
            paragraphs: [
             
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/bbc-designsystem-column.png`,
              alt: "Music Mash"
            }
          },
          {
            title: "",
            paragraphs: [
            
            
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/bbc-designsystem-guideline.png`,
              alt: "Music Mash Persona"
            }
          },

          
        ]
      },

      /***********************************
       *        Scania Help Center project           *  
       ***********************************/
      // 'scania-help-center': {
      //   id: 'bbc-project',
      //   title: 'BBC News App Redesign',
      //   client: 'BBC',
      //   role: 'UX/UI Design Lead',
      //   time: 'Jan 2023 - Jun 2023',
      //   process: 'Research → Ideation → Design → Prototype → Test',
      //   description: '"Reimagining the BBC News app for a more personalized and engaging user experience."',
      //   credits: ['Jane Smith', 'John Doe', 'Alice Johnson', 'Bob Williams'],
      //   videoSrc: `${process.env.PUBLIC_URL}/media/videos/bbc-demo.mp4`,
      //   detailedIntro: 'The BBC News app redesign project aimed to modernize the user interface, improve content discovery, and enhance the overall user experience for millions of global users.',
      //   sections: [
      //     {
      //       title: "1. Context",
      //       paragraphs: [
      //         "The BBC News app is one of the most popular news applications globally, serving millions of users with up-to-date news and information.",
      //         "With changing user behaviors and expectations in the digital news landscape, BBC recognized the need to evolve its mobile app to maintain its competitive edge and better serve its diverse user base.",
      //         "Our team was tasked with redesigning the app to improve content discovery, personalization, and overall user engagement while maintaining BBC's reputation for reliable and impartial news reporting."
      //       ],
      //       media: {
      //         type: "image",
      //         src: `${process.env.PUBLIC_URL}/media/images/bbc-context.png`,
      //         alt: "BBC News App Context"
      //       }
      //     },
      //     {
      //       title: "2. Problem",
      //       paragraphs: [
      //         "The existing BBC News app faced several challenges:",
      //         "• Limited personalization options, leading to a one-size-fits-all approach to news delivery",
      //         "• Difficulty in discovering diverse content beyond top headlines",
      //         "• Outdated user interface that didn't align with modern design standards",
      //         "• Lack of features to encourage user engagement and interaction with news content"
      //       ],
      //       media: {
      //         type: "image",
      //         src: `${process.env.PUBLIC_URL}/media/images/bbc-problem.png`,
      //         alt: "BBC News App Problems"
      //       }
      //     },
      //     {
      //       title: "3. Design Process",
      //       paragraphs: [
      //         "Our design process for the BBC News app redesign involved the following steps:",
      //         "• User Research: Conducted surveys, interviews, and usability tests with existing app users to understand pain points and desires.",
      //         "• Competitive Analysis: Analyzed other popular news apps to identify best practices and potential areas for innovation.",
      //         "• Ideation: Brainstormed solutions for key issues identified in the research phase, focusing on personalization and content discovery.",
      //         "• Wireframing: Created low-fidelity wireframes to quickly iterate on layout and functionality ideas.",
      //         "• Prototyping: Developed high-fidelity prototypes to visualize the new design and test user flows.",
      //         "• User Testing: Conducted multiple rounds of user testing with prototypes to gather feedback and refine the design.",
      //         "• Visual Design: Crafted a modern, clean visual design language that aligned with BBC's brand guidelines while introducing fresh elements.",
      //         "• Handoff & Implementation: Worked closely with the development team to ensure accurate implementation of the design."
      //       ],
      //       media: {
      //         type: "image",
      //         src: `${process.env.PUBLIC_URL}/media/images/bbc-design-process.png`,
      //         alt: "BBC News App Design Process"
      //       }
      //     },
      //     {
      //       title: "4. Key Features",
      //       paragraphs: [
      //         "The redesigned BBC News app introduced several key features:",
      //         "• Personalized News Feed: An AI-driven feed that learns from user behavior to deliver more relevant content.",
      //         "• Topic Explorer: A new section allowing users to dive deep into specific topics or regions of interest.",
      //         "• Interactive Content: Integration of polls, quizzes, and comment sections to increase user engagement.",
      //         "• Dark Mode: Implementation of a dark theme for improved readability in low-light conditions.",
      //         "• Customizable Navigation: Allowing users to tailor their quick access menu to their most-used sections."
      //       ],
      //       media: {
      //         type: "video",
      //         src: `${process.env.PUBLIC_URL}/media/videos/bbc-features-demo.mp4`,
      //         alt: "BBC News App Key Features Demo"
      //       }
      //     },
      //     {
      //       title: "5. Impacts",
      //       paragraphs: [
      //         "The redesigned BBC News app has been well-received by users and stakeholders alike. Key impacts include:",
      //         "• 30% increase in daily active users within the first month of launch",
      //         "• 45% improvement in user engagement metrics, including time spent in the app and articles read",
      //         "• 25% increase in user-generated content interactions (comments, polls, etc.)",
      //         "• Positive user feedback, with the app store rating improving from 3.8 to 4.6 stars",
      //         "• Successfully modernized BBC's digital presence while maintaining its core values and reputation"
      //       ],
      //       media: {
      //         type: "image",
      //         src: `${process.env.PUBLIC_URL}/media/images/bbc-impact.png`,
      //         alt: "BBC News App Redesign Impact"
      //       }
      //     }
      //   ]
      // },
'creative-coding-project': {
  id: 'creative-coding-project1',
  title: 'Creative Coding Project',
  client: 'School project',
  role: 'Creative Coding',
  time: '2024',
  process: 'Research → Ideation → Design → Prototype → Test',
  description: 'Creative Coding Project: Index 1',
  credits: [],
  videoSrc: `${process.env.PUBLIC_URL}/media/videos/creative-coding-project2.mp4`,
  detailedIntro: 'Creative Coding Project: Index 1',
  sections: [

  ],
      },
'creative-coding-project2': {
  id: 'creative-coding-project2',
  title: 'Creative Coding Project',
  client: 'School project',
  role: 'Creative Coding',
  time: '2024',
  process: 'Research → Ideation → Design → Prototype → Test',
  description: 'Creative Coding Project: Index 2',
  credits: [],
  videoSrc: `${process.env.PUBLIC_URL}/media/videos/creative-coding-project.mp4`,
  detailedIntro: 'Creative Coding Project: Index 2',
  sections: [

  ],
      },
'creative-coding-project3': {
  id: 'creative-coding-project3',
  title: 'Creative Coding Project',
  client: 'School project',
  role: 'Creative Coding',
  time: '2024',
  process: 'Research → Ideation → Design → Prototype → Test',
  description: 'Creative Coding Project: Firework',
  credits: [],
  videoSrc: `${process.env.PUBLIC_URL}/media/videos/creative-coding-firework.mp4`,
  detailedIntro: 'Creative Coding Project: Firework',
  sections: [

  ],
},

    };
  }

  getCaseStudy(id) {
    return this.caseStudies[id];
  }

  getAllCaseStudies() {
    return Object.values(this.caseStudies);
  }
}

export default CaseStudyModel;