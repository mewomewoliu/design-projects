class CaseStudyModel {
  constructor() {
    this.caseStudies = {
      'music-library': {
        id: 'music-library',
        title: 'Music Library',
        client: 'Storykit',
        role: 'UI Design Lead',
        time: 'Dec 2022 - Mar 2023',
        process: 'Research → Design → Test → Deliver',
        description: '"A music browser that accelerates music discovery and delivers just the right music for your videos."',
        credits: ['Shapour jahanshahi', 'Oksana Romaniuk', 'Emil Sivervík', 'Alexei', 'Marcus Nirbrant'],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/storykit.mp4`,
        detailedIntro: 'Detailed introduction of the Music Library project goes here. This should be a longer paragraph explaining the project in depth.',
        sections: [
          {
            title: "1. Context",
            paragraphs: [
              "Storykit.io is an innovative AI-powered video creation SaaS application that empowers users to effortlessly produce high-quality video content for diverse purposes.",
                "The platform is designed to assist marketing departments, organizations, and individuals in crafting compelling narratives that resonate with their audiences in a seamless and user-friendly manner.",
              "Music is a key ingredient in making captivating and effective videos. At Storykit, the aim is to provide users with great music choices while making the process of finding the right music faster and easier. Mia was responsible for designing a Music Library to achieve this goal.",
            ],
            media: {
              type: "image",
              src: ``,
              alt: ""
            }
          },
          {
            title: "2.Problem",
            paragraphs: [
              "The previous music browser (left image) offered limited music choices, impacting the quality of video creation.",
              "Our objectives included:",
              "• Revamp the music browser to expedite music discovery",
              "• Motivate freemium users to transition to premium subscriptions",
              "• Elevate the brand's visual identity through UI design"
            ],
            media: {
              type: "image",
                src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-problem.png`,
              alt: "Music Library Problem"
            }
            },
            {
                title: "3. Design",
                paragraphs: [
                  "In my design process, particularly for my client Storykit, I followed these 8 steps:", 
                  "• Roundtable Discussion: Collaborated with the Product Manager, Tech Lead, front-end and back-end development teams, and the QA manager to get a holistic picture from various perspectives. Importantly, prioritised the core goals to accomplish.",
                  "• Research: Conducted research on Storykit's user segments, current music browsers in the market, and music provider storyblocks.com to gather knowledge.",
                  "• Design Solution: Brainstormed solutions for prioritized requirements and issues, creating quick sketches and user flows to test these solutions.",
                  "• Prototyping: Developed hi-fi prototypes to visualize the solutions, showcasing user flows and interactions.",
                  "• Team Feedback: Before user testing, I shared the prototypes with the team to gather different insights and ensure alignment with technical requirements and limitations. For example, we had to prevent direct music downloads from the console while ensure a good preview experience.",
                  "• User Testing: Conducted Guerrilla tests with 5 users from Netlight to validate design hypotheses and gather nonverbal feedback.",
                  "• Design Refinement: Based on testing results and users' verbal and nonverbal inputs, I refined design solutions, strategies, and UI.",
                  "• Delivery & Parallel Issue Resolution: Once we had confidence in the refined design, the development team began implementing it. We simultaneously addressed minor issues related to interactions, technical constraints, brand guidelines, and kept polishing."
                ],
                media: {
                  type: "image",
                src: ``,
                alt: "Music Library Premium"
                }
            },
            {
              title: "Key Questions",
              paragraphs: [
                "Who is our target audience for design?",
                "What challenges are we addressing and what are the potential values and risks?",
                "How will we tackle these challenges?",
              ],
                media: {
                    type: "image",
                    src: ``,
                    alt: ""
                }
            },

            {
                title: "Accessible to all users",
                paragraphs: [
                    "Freemium users",
                    "Starter users",
                    "Standard users",
                    "Limited access to premium music tracks",
                    "Enterprise users",
                    "Full access to premium music tracks",
                ],
                media: {
                    type: "image",
                    src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-home.png`,
                    alt: "Premium View Premium music library Full access to all premium music tracks"
                },
                
               
            },
            {
                title: "",
                paragraphs: [
                    "",
                ],
                media: {
                    type: "image",
                    src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-premium.png`,
                    alt: "Premium View Premium music library Full access to all premium music tracks"
                },
            },
            {
                title: "",
                paragraphs: [
                    "",
                ],
                media: {
                    type: "image",
                    src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-delete.png`,
                    alt: "Premium View Premium music library Full access to all premium music tracks"
                }
            },
            {
                title: "Key strategy",
                paragraphs: [
                    "Effortlessly Find the Perfect Music:",
                    "• Discover the most suitable music quickly using keyword search and efficient filtering.",
                    "Intuitive Feedback System:",
                    "• Enjoy a user-friendly system with intuitive feedback.",
                    "Upgrade Seamlessly: ",
                    "• Attract freemium music library users to upgrade their subscriptions with a clear and fast call-to-action (CTA).",
                    "Unified Experience and Strong Brand Identity:",
                    "• Deliver a cohesive user experience while strengthening the brand identity.",
                ],
                media: {
                    type: "video",
                    src: `${process.env.PUBLIC_URL}/media/videos/musiclibrary-demo.mp4`,
                    alt: "Music Library Demo"
                }
            },
            {
                title: "Marketing Banner",
                paragraphs: [
                    "In the previous design, Storykit's brand identity was not integrated into the product UI, resulting in a lack of brand cohesion. ",
                    "I spearheaded the creation of Storykit banners within the music library for several essential purposes:",
                    "• To strengthen Storykit's brand identity within the app and maintain brand cohesion.",
                    "• To inform users about the 27,000 additional audio tracks available upon upgrading their subscription.",
                    "• To offer users a convenient and streamlined pathway to complete the subscription upgrade process.",
                ],
                media: {
                    type: "image",
                    src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-premium.png`,
                    alt: "Premium View Premium music library Full access to all premium music tracks"
                }
            },
            {
                title: "4. Impacts",
                paragraphs: [
                    "This feature has been rolled out to Storykit users globally, and we've been meticulously monitoring user data and collecting feedback from real users.",
                    "To gauge the effectiveness of our design hypothesis and its real-world performance, we established several key performance indicators (KPIs):",
                    "• The average time saved when users find a suitable music track for their videos.",
                    "• The number of new upgraded users on a weekly basis.",
                    "Regarding our goal of infusing the brand's personality into the UI design, our measure of success was whether users found the transition to the new music library seamless. As one user aptly put it,",
                    "'This is very Storykit!'",
                    "Here are the results:",
                    "• Users saved an average of 4 minutes when discovering a suitable music track using the new music library. (The time savings were substantial, given that users previously had to source music from external websites and upload it to the old music browser).",
                    "• Within just 2 days of the initial launch, we achieved 14 new upgrades, and all of them were directly attributed to the marketing banner."
                ],
                media: {
                    type: "image",
                    src: `${process.env.PUBLIC_URL}/media/images/musiclibrary-delete.png`,
                    alt: "Premium View Premium music library Full access to all premium music tracks"
                }
            },
        ],
      },
      'bbc-project': {
        id: 'bbc-project',
        title: 'BBC News App Redesign',
        client: 'BBC',
        role: 'UX/UI Design Lead',
        time: 'Jan 2023 - Jun 2023',
        process: 'Research → Ideation → Design → Prototype → Test',
        description: '"Reimagining the BBC News app for a more personalized and engaging user experience."',
        credits: ['Jane Smith', 'John Doe', 'Alice Johnson', 'Bob Williams'],
        videoSrc: `${process.env.PUBLIC_URL}/media/videos/bbc-demo.mp4`,
        detailedIntro: 'The BBC News app redesign project aimed to modernize the user interface, improve content discovery, and enhance the overall user experience for millions of global users.',
        sections: [
          {
            title: "1. Context",
            paragraphs: [
              "The BBC News app is one of the most popular news applications globally, serving millions of users with up-to-date news and information.",
              "With changing user behaviors and expectations in the digital news landscape, BBC recognized the need to evolve its mobile app to maintain its competitive edge and better serve its diverse user base.",
              "Our team was tasked with redesigning the app to improve content discovery, personalization, and overall user engagement while maintaining BBC's reputation for reliable and impartial news reporting."
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/bbc-context.png`,
              alt: "BBC News App Context"
            }
          },
          {
            title: "2. Problem",
            paragraphs: [
              "The existing BBC News app faced several challenges:",
              "• Limited personalization options, leading to a one-size-fits-all approach to news delivery",
              "• Difficulty in discovering diverse content beyond top headlines",
              "• Outdated user interface that didn't align with modern design standards",
              "• Lack of features to encourage user engagement and interaction with news content"
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/bbc-problem.png`,
              alt: "BBC News App Problems"
            }
          },
          {
            title: "3. Design Process",
            paragraphs: [
              "Our design process for the BBC News app redesign involved the following steps:",
              "• User Research: Conducted surveys, interviews, and usability tests with existing app users to understand pain points and desires.",
              "• Competitive Analysis: Analyzed other popular news apps to identify best practices and potential areas for innovation.",
              "• Ideation: Brainstormed solutions for key issues identified in the research phase, focusing on personalization and content discovery.",
              "• Wireframing: Created low-fidelity wireframes to quickly iterate on layout and functionality ideas.",
              "• Prototyping: Developed high-fidelity prototypes to visualize the new design and test user flows.",
              "• User Testing: Conducted multiple rounds of user testing with prototypes to gather feedback and refine the design.",
              "• Visual Design: Crafted a modern, clean visual design language that aligned with BBC's brand guidelines while introducing fresh elements.",
              "• Handoff & Implementation: Worked closely with the development team to ensure accurate implementation of the design."
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/bbc-design-process.png`,
              alt: "BBC News App Design Process"
            }
          },
          {
            title: "4. Key Features",
            paragraphs: [
              "The redesigned BBC News app introduced several key features:",
              "• Personalized News Feed: An AI-driven feed that learns from user behavior to deliver more relevant content.",
              "• Topic Explorer: A new section allowing users to dive deep into specific topics or regions of interest.",
              "• Interactive Content: Integration of polls, quizzes, and comment sections to increase user engagement.",
              "• Dark Mode: Implementation of a dark theme for improved readability in low-light conditions.",
              "• Customizable Navigation: Allowing users to tailor their quick access menu to their most-used sections."
            ],
            media: {
              type: "video",
              src: `${process.env.PUBLIC_URL}/media/videos/bbc-features-demo.mp4`,
              alt: "BBC News App Key Features Demo"
            }
          },
          {
            title: "5. Impacts",
            paragraphs: [
              "The redesigned BBC News app has been well-received by users and stakeholders alike. Key impacts include:",
              "• 30% increase in daily active users within the first month of launch",
              "• 45% improvement in user engagement metrics, including time spent in the app and articles read",
              "• 25% increase in user-generated content interactions (comments, polls, etc.)",
              "• Positive user feedback, with the app store rating improving from 3.8 to 4.6 stars",
              "• Successfully modernized BBC's digital presence while maintaining its core values and reputation"
            ],
            media: {
              type: "image",
              src: `${process.env.PUBLIC_URL}/media/images/bbc-impact.png`,
              alt: "BBC News App Redesign Impact"
            }
          }
        ]
      }
      // You can add more case studies here as needed
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