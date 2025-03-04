document.addEventListener('DOMContentLoaded', function() {
    // Blog post data (in a real application, this would be fetched from a backend)
    const blogPosts = {
        1: {
            title: "Understanding Modern JavaScript",
            date: "April 15, 2023",
            category: "development",
            content: `
                <p>JavaScript has evolved significantly over the years, with ECMAScript 6 (ES6) and subsequent releases introducing powerful new features that have transformed how we write code. In this post, we'll explore some of these modern features and how they can make your code more concise, readable, and maintainable.</p>
                
                <h3>Arrow Functions</h3>
                <p>Arrow functions provide a more concise syntax for writing function expressions. They also lexically bind the <code>this</code> value, which can help avoid common pitfalls with traditional function expressions.</p>
                
                <pre>// Traditional function
const add = function(a, b) {
    return a + b;
};

// Arrow function
const add = (a, b) => a + b;</pre>
                
                <h3>Destructuring Assignment</h3>
                <p>Destructuring allows you to unpack values from arrays or properties from objects into distinct variables, which can make your code cleaner and more readable.</p>
                
                <pre>// Object destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;

// Array destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;</pre>
                
                <h3>Spread and Rest Operators</h3>
                <p>The spread operator (...) allows an iterable to be expanded in places where zero or more arguments or elements are expected, while the rest parameter syntax allows us to represent an indefinite number of arguments as an array.</p>
                
                <pre>// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}</pre>
                
                <h3>Template Literals</h3>
                <p>Template literals provide an easier way to concatenate strings and include expressions within strings.</p>
                
                <pre>const name = 'John';
const greeting = \`Hello, \${name}!\`; // "Hello, John!"</pre>
                
                <h3>Async/Await</h3>
                <p>The async/await syntax provides a more intuitive way to work with promises, making asynchronous code look and behave more like synchronous code.</p>
                
                <pre>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}</pre>
                
                <h3>Conclusion</h3>
                <p>These modern JavaScript features can significantly improve your code quality and developer experience. By embracing these patterns, you'll write more concise, readable, and maintainable code that takes advantage of the language's evolving capabilities.</p>
                
                <p>In future posts, we'll explore more advanced JavaScript concepts and best practices for building modern web applications.</p>
            `
        },
        2: {
            title: "UI Design Principles Every Developer Should Know",
            date: "March 28, 2023",
            category: "design",
            content: `
                <p>As developers, we often focus primarily on functionality and code quality. However, understanding basic UI design principles can significantly enhance the user experience of our applications. In this post, we'll explore essential design principles that every developer should know.</p>
                
                <h3>Visual Hierarchy</h3>
                <p>Visual hierarchy refers to the arrangement of elements to show their order of importance. By using size, color, contrast, and spacing, you can guide users' attention to the most important elements first.</p>
                
                <p>Key techniques include:</p>
                <ul>
                    <li>Using larger font sizes for headings and important content</li>
                    <li>Applying bold colors to call-to-action buttons</li>
                    <li>Creating contrast between text and background</li>
                    <li>Using whitespace to separate and highlight key elements</li>
                </ul>
                
                <h3>Consistency</h3>
                <p>Consistency in design creates a sense of reliability and familiarity. It helps users learn your interface faster and navigate with confidence.</p>
                
                <p>Maintain consistency in:</p>
                <ul>
                    <li>Color schemes and typography</li>
                    <li>Button styles and interactive elements</li>
                    <li>Spacing and layout patterns</li>
                    <li>Terminology and language</li>
                </ul>
                
                <h3>Simplicity</h3>
                <p>Simplicity is about removing unnecessary elements and making the interface as intuitive as possible. Remember that every element you add increases the cognitive load for your users.</p>
                
                <p>Ways to embrace simplicity:</p>
                <ul>
                    <li>Eliminate redundant elements</li>
                    <li>Use progressive disclosure to reveal information when needed</li>
                    <li>Provide clear, concise copy</li>
                    <li>Limit the number of choices presented at once</li>
                </ul>
                
                <h3>Feedback</h3>
                <p>Users need confirmation that their actions have been recognized and processed. Good feedback keeps users informed and builds trust in your application.</p>
                
                <p>Effective feedback includes:</p>
                <ul>
                    <li>Button state changes (hover, active, disabled)</li>
                    <li>Loading indicators</li>
                    <li>Success and error messages</li>
                    <li>Animation for transitions and state changes</li>
                </ul>
                
                <h3>Accessibility</h3>
                <p>Designing with accessibility in mind ensures your application can be used by people with various abilities and disabilities.</p>
                
                <p>Basic accessibility considerations:</p>
                <ul>
                    <li>Sufficient color contrast</li>
                    <li>Keyboard navigation support</li>
                    <li>Screen reader compatibility</li>
                    <li>Resizable text without breaking layouts</li>
                </ul>
                
                <h3>Conclusion</h3>
                <p>Understanding these fundamental design principles will help you create more user-friendly interfaces, even if you're primarily focused on development. By incorporating these principles into your work, you'll deliver better experiences and demonstrate a valuable cross-disciplinary skill set.</p>
                
                <p>Remember that good design isn't just about aesthetics—it's about creating interfaces that are intuitive, efficient, and enjoyable to use.</p>
            `
        },
        3: {
            title: "The Future of Web Development",
            date: "February 12, 2023",
            category: "technology",
            content: `
                <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. In this post, we'll explore some of the trends and technologies that are likely to shape the future of web development.</p>
                
                <h3>WebAssembly (WASM)</h3>
                <p>WebAssembly is a binary instruction format that enables high-performance execution of code in web browsers. It allows developers to run code written in languages like C, C++, and Rust on the web at near-native speed.</p>
                
                <p>Potential impacts of WebAssembly:</p>
                <ul>
                    <li>Browser-based gaming will become more sophisticated</li>
                    <li>Compute-intensive applications (like video editing) can run in browsers</li>
                    <li>Existing software can be ported to run on the web</li>
                    <li>Development teams can leverage their expertise in other languages</li>
                </ul>
                
                <h3>Progressive Web Apps (PWAs)</h3>
                <p>PWAs continue to gain traction by offering app-like experiences through web technologies. They work offline, can be installed on devices, and provide push notifications.</p>
                
                <p>The evolution of PWAs may include:</p>
                <ul>
                    <li>Better integration with device features and hardware</li>
                    <li>Improved performance metrics and capabilities</li>
                    <li>More widespread adoption across industries</li>
                    <li>Reduced distinction between web and native apps</li>
                </ul>
                
                <h3>AI and Machine Learning Integration</h3>
                <p>AI and ML capabilities are becoming more accessible to web developers through specialized APIs and JavaScript libraries.</p>
                
                <p>Examples of AI/ML in web development:</p>
                <ul>
                    <li>Content personalization based on user behavior</li>
                    <li>Image and voice recognition features</li>
                    <li>Predictive text and search functionality</li>
                    <li>Chatbots and virtual assistants</li>
                </ul>
                
                <h3>Jamstack Architecture</h3>
                <p>The Jamstack approach (JavaScript, APIs, and Markup) continues to evolve, focusing on pre-rendering and decoupling the frontend from backend services.</p>
                
                <p>Benefits and future directions:</p>
                <ul>
                    <li>Improved security and performance</li>
                    <li>Better developer experience with specialized tools</li>
                    <li>More sophisticated edge computing capabilities</li>
                    <li>Enhanced integration with headless CMS systems</li>
                </ul>
                
                <h3>Low-Code and No-Code Development</h3>
                <p>Low-code and no-code platforms are making web development more accessible to non-developers, changing the role of professional developers.</p>
                
                <p>Implications for developers:</p>
                <ul>
                    <li>Focus shifting to complex problems and architecture</li>
                    <li>Creating components and extensions for these platforms</li>
                    <li>Collaboration with non-technical team members</li>
                    <li>Increased development speed for prototyping</li>
                </ul>
                
                <h3>Conclusion</h3>
                <p>The future of web development promises exciting opportunities and challenges. By staying informed about emerging technologies and continuously expanding your skill set, you'll be well-positioned to adapt to this evolving landscape.</p>
                
                <p>As web technologies continue to advance, the line between web applications and other software will continue to blur, opening up new possibilities for what can be built for and delivered through the browser.</p>
            `
        },
        4: {
            title: "Building Accessible Web Applications",
            date: "January 20, 2023",
            category: "development",
            content: `
                <p>Web accessibility is not just a nice-to-have feature—it's a necessity that ensures everyone, including people with disabilities, can use your website or application. In this post, we'll explore practical techniques for building more accessible web applications.</p>
                
                <h3>Semantic HTML</h3>
                <p>Using semantic HTML is the foundation of web accessibility. Semantic elements provide meaning to your content, making it easier for assistive technologies to interpret.</p>
                
                <p>Key practices:</p>
                <ul>
                    <li>Use appropriate heading levels (h1-h6) to create a logical structure</li>
                    <li>Implement <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, and other semantic elements</li>
                    <li>Use <code>&lt;button&gt;</code> for clickable controls and <code>&lt;a&gt;</code> for navigation</li>
                    <li>Implement proper form labels and fieldsets</li>
                </ul>
                
                <h3>Keyboard Navigation</h3>
                <p>Many users rely on keyboards instead of mice to navigate websites. Ensuring keyboard accessibility is crucial for these users.</p>
                
                <p>Important considerations:</p>
                <ul>
                    <li>Make all interactive elements focusable and operable with a keyboard</li>
                    <li>Maintain a logical tab order</li>
                    <li>Provide visible focus indicators</li>
                    <li>Implement keyboard shortcuts for common actions</li>
                </ul>
                
                <h3>ARIA Attributes</h3>
                <p>Accessible Rich Internet Applications (ARIA) attributes can enhance accessibility when HTML alone isn't sufficient.</p>
                
                <p>Best practices for ARIA:</p>
                <ul>
                    <li>Use ARIA only when necessary—native HTML is preferable when possible</li>
                    <li>Implement aria-label for elements without visible text</li>
                    <li>Use aria-expanded for toggle elements</li>
                    <li>Implement aria-live regions for dynamic content</li>
                </ul>
                
                <h3>Color and Contrast</h3>
                <p>Poor color choices can make content inaccessible to users with visual impairments or color blindness.</p>
                
                <p>Guidelines to follow:</p>
                <ul>
                    <li>Maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text</li>
                    <li>Don't rely on color alone to convey information</li>
                    <li>Provide additional indicators like patterns or icons</li>
                    <li>Test your designs with color blindness simulators</li>
                </ul>
                
                <h3>Testing and Tools</h3>
                <p>Regular testing is essential to ensure your application remains accessible as it evolves.</p>
                
                <p>Useful tools and approaches:</p>
                <ul>
                    <li>Automated testing tools like Lighthouse and axe</li>
                    <li>Screen reader testing (NVDA, JAWS, VoiceOver)</li>
                    <li>Keyboard-only navigation testing</li>
                    <li>User testing with people who have disabilities</li>
                </ul>
                
                <h3>Conclusion</h3>
                <p>Building accessible web applications is not only a legal requirement in many jurisdictions but also expands your user base and improves the experience for everyone. By incorporating these practices into your development workflow, you'll create more inclusive digital experiences.</p>
                
                <p>Remember that accessibility is an ongoing process, not a one-time task. Regular audits and continuous improvements will help maintain and enhance the accessibility of your applications over time.</p>
            `
        },
        5: {
            title: "Color Theory in Web Design",
            date: "December 5, 2022",
            category: "design",
            content: `
                <p>Color is one of the most powerful tools in a designer's arsenal. It can influence mood, direct attention, and communicate meaning without words. In this post, we'll explore the fundamentals of color theory and how to apply it effectively in web design.</p>
                
                <h3>The Color Wheel</h3>
                <p>The color wheel is the foundation of color theory, organizing colors in a logical sequence. Understanding its structure helps you make informed color choices.</p>
                
                <p>Key components:</p>
                <ul>
                    <li>Primary colors: Red, blue, and yellow</li>
                    <li>Secondary colors: Created by mixing primary colors (orange, green, purple)</li>
                    <li>Tertiary colors: Created by mixing primary and secondary colors</li>
                    <li>Hue, saturation, and brightness as dimensions of color</li>
                </ul>
                
                <h3>Color Harmonies</h3>
                <p>Color harmonies are specific combinations of colors based on their positions on the color wheel. They provide a structured approach to creating pleasing color schemes.</p>
                
                <p>Common color harmonies:</p>
                <ul>
                    <li>Monochromatic: Different shades and tints of a single hue</li>
                    <li>Analogous: Colors that are adjacent on the color wheel</li>
                    <li>Complementary: Colors opposite each other on the color wheel</li>
                    <li>Triadic: Three colors equally spaced around the color wheel</li>
                    <li>Split complementary: A base color and the two colors adjacent to its complement</li>
                </ul>
                
                <h3>Psychological Effects of Colors</h3>
                <p>Colors can evoke specific emotions and associations, though these effects can vary across cultures and contexts.</p>
                
                <p>Common associations in Western cultures:</p>
                <ul>
                    <li>Blue: Trust, stability, calmness, professionalism</li>
                    <li>Red: Energy, urgency, passion, attention</li>
                    <li>Green: Growth, nature, wealth, health</li>
                    <li>Yellow: Optimism, clarity, warmth, caution</li>
                    <li>Purple: Luxury, creativity, wisdom, spirituality</li>
                    <li>Orange: Enthusiasm, playfulness, affordability, action</li>
                </ul>
                
                <h3>Creating Effective Color Palettes</h3>
                <p>A well-designed color palette helps establish your brand identity and ensures visual consistency across your website.</p>
                
                <p>Guidelines for effective palettes:</p>
                <ul>
                    <li>Limit your palette to 3-5 colors for clarity and cohesion</li>
                    <li>Include neutral colors for balance and versatility</li>
                    <li>Select a dominant color, secondary colors, and accent colors</li>
                    <li>Ensure sufficient contrast for text readability</li>
                    <li>Consider accessibility for users with color vision deficiencies</li>
                </ul>
                
                <h3>Practical Application in Web Design</h3>
                <p>Applying color theory effectively requires strategic thinking about your website's purpose and audience.</p>
                
                <p>Implementation strategies:</p>
                <ul>
                    <li>Use your primary brand color for key elements like logos and headers</li>
                    <li>Apply accent colors to call-to-action buttons and important interactive elements</li>
                    <li>Utilize neutral colors for backgrounds and large blocks of text</li>
                    <li>Create visual hierarchy by applying contrasting colors to elements you want to emphasize</li>
                    <li>Use color consistently to reinforce navigation patterns and user flow</li>
                </ul>
                
                <h3>Conclusion</h3>
                <p>Understanding color theory provides a solid foundation for making informed design decisions. By applying these principles thoughtfully, you can create visually appealing, effective web designs that resonate with your users and support your content and functionality.</p>
                
                <p>Remember that color choices should always serve your design goals and enhance the user experience, rather than simply following trends or personal preferences.</p>
            `
        },
        6: {
            title: "Getting Started with Machine Learning",
            date: "November 15, 2022",
            category: "technology",
            content: `
                <p>Machine learning has transformed from a specialized field to an accessible technology that developers can incorporate into their projects. In this post, we'll explore the fundamentals of machine learning and how to get started with implementing ML in your applications.</p>
                
                <h3>Understanding Machine Learning Concepts</h3>
                <p>Before diving into code, it's important to understand the basic concepts that underpin machine learning.</p>
                
                <p>Key concepts:</p>
                <ul>
                    <li>Supervised learning: Training with labeled data to make predictions</li>
                    <li>Unsupervised learning: Finding patterns in unlabeled data</li>
                    <li>Classification: Predicting categorical outcomes (e.g., spam/not spam)</li>
                    <li>Regression: Predicting numerical values (e.g., house prices)</li>
                    <li>Training and test datasets: Data splitting for model evaluation</li>
                    <li>Overfitting and underfitting: Common challenges in model accuracy</li>
                </ul>
                
                <h3>Tools and Libraries for Beginners</h3>
                <p>Several high-quality tools and libraries make machine learning more accessible to developers without extensive mathematical backgrounds.</p>
                
                <p>Recommended resources:</p>
                <ul>
                    <li>Python: The most popular language for ML due to its readability and ecosystem</li>
                    <li>Scikit-learn: A user-friendly library for classical ML algorithms</li>
                    <li>TensorFlow.js: Bring ML capabilities to JavaScript applications</li>
                    <li>ML5.js: Simplified ML for the web, built on TensorFlow.js</li>
                    <li>Jupyter Notebooks: Interactive environment for experimentation</li>
                    <li>Google Colab: Free cloud-based Jupyter environment with GPU access</li>
                </ul>
                
                <h3>Your First Machine Learning Project</h3>
                <p>Starting with a simple project can help solidify your understanding of machine learning concepts.</p>
                
                <p>Steps for your first project:</p>
                <ul>
                    <li>Choose a beginner-friendly problem (e.g., predict housing prices)</li>
                    <li>Find a clean, well-documented dataset</li>
                    <li>Explore and visualize the data to understand its characteristics</li>
                    <li>Prepare the data (handle missing values, normalize, encode categories)</li>
                    <li>Select and train a simple model (linear regression, decision tree)</li>
                    <li>Evaluate the model's performance and iterate</li>
                </ul>
                
                <h3>Integrating ML in Web Applications</h3>
                <p>Incorporating machine learning into web applications has become more feasible with browser-based ML libraries.</p>
                
                <p>Web-based ML use cases:</p>
                <ul>
                    <li>Image recognition and classification on uploaded photos</li>
                    <li>Text analysis for sentiment or content categorization</li>
                    <li>Recommendation systems based on user behavior</li>
                    <li>Real-time pose detection with webcam input</li>
                    <li>Natural language processing for chatbots or text generation</li>
                </ul>
                
                <h3>Learning Resources</h3>
                <p>Continuing education is essential in the rapidly evolving field of machine learning.</p>
                
                <p>Recommended learning resources:</p>
                <ul>
                    <li>Andrew Ng's Machine Learning courses on Coursera</li>
                    <li>Fast.ai's practical deep learning courses</li>
                    <li>TensorFlow and scikit-learn documentation</li>
                    <li>Kaggle competitions for real-world practice</li>
                    <li>ML communities on Reddit and Stack Overflow</li>
                </ul>
                
                <h3>Conclusion</h3>
                <p>Machine learning may seem intimidating at first, but with the right approach and tools, it's an accessible technology that can add powerful capabilities to your applications. Start small, focus on understanding the fundamentals, and gradually tackle more complex problems as your confidence grows.</p>
                
                <p>Remember that machine learning is a tool to solve problems, not an end in itself. Always focus on the problem you're trying to solve and how ML can help address it effectively.</p>
            `
        }
    };

    // Get all blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    const modal = document.getElementById('blog-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    
    // Add click event to each blog card
    blogCards.forEach(card => {
        card.addEventListener('click', function() {
            const postId = this.getAttribute('data-id');
            const post = blogPosts[postId];
            
            // Populate modal with blog post content
            modalTitle.textContent = post.title;
            modalDate.textContent = post.date;
            modalBody.innerHTML = post.content;
            
            // Show the modal
            modal.style.display = 'block';
            
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Filter blog posts by category
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter blog cards
            blogCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('blog-search');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        blogCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});