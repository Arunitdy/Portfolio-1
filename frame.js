const about=` <p>Description: The "About" section serves as a comprehensive introduction to the individual or organization behind the website. It provides context and background information, helping visitors understand who you are, what you do, and why you do it. This section often includes:</p>
                          <ul>
                              <li>Background Information: Details about the history, founding, and evolution of the person or organization.</li>
                              <li>Mission and Vision: A clear statement of your goals, values, and what you aim to achieve.</li>
                              <li>Team Information: Bios of key team members or collaborators, if applicable.</li>
                              <li>Achievements: Major milestones, awards, or recognitions that highlight your credibility and success.</li>
                          </ul>
                          <p>Example Content:</p>
                          <p><strong>For a Company:</strong> "Welcome to our company! Founded in 2010, we have dedicated ourselves to providing innovative solutions in technology. Our mission is to transform the industry with cutting-edge products while adhering to our core values of integrity and customer satisfaction. Meet our team of experts who are committed to making a difference."</p>
                          <p><strong>For an Individual:</strong> "Hi, I’m Jane Doe, a passionate web designer with over 15 years of experience in creating stunning, user-friendly websites. My journey began in 2008 with a fascination for design and technology. Here, you’ll find out more about my professional background, the projects I’ve worked on, and the principles that guide my work."</p>
                      `;

const Resume=`<p>Description: The "Resume" section provides a detailed summary of professional qualifications, tailored to showcase your experience and skills. It usually includes:</p>
                              <ul>
                                  <li>Work Experience: A chronological list of previous roles, responsibilities, and achievements.</li>
                                  <li>Education: Details of academic qualifications, degrees, and relevant certifications.</li>
                                  <li>Skills and Expertise: A summary of key skills, areas of expertise, and technical proficiencies.</li>
                                  <li>Professional Achievements: Highlights of significant accomplishments, awards, and recognitions.</li>
                              </ul>
                              <p>Example Content:</p>
                              <p><strong>For a Job Seeker:</strong> "My resume outlines a career spanning over a decade in project management. It includes my role as a Senior Project Manager at XYZ Corp, where I led cross-functional teams to successfully complete high-profile projects. You’ll also find details about my educational background in Business Administration and certifications in Agile methodologies."</p>
                              <p><strong>For a Professional Profile:</strong> "Browse through my professional resume, showcasing my work as a software engineer. It includes my experience in developing scalable applications, my educational journey with a degree in Computer Science, and my certification in cloud computing. This section also highlights notable projects and contributions to industry advancements."</p>
                      `

const Blog=`<p>Description: The "Blog" section is a dynamic area for publishing content related to your field of expertise, interests, or industry. It offers an ongoing stream of articles, updates, and discussions. Key components include:</p>
                              <ul>
                                  <li>Recent Posts: A list of the latest blog entries, typically with summaries and links to full articles.</li>
                                  <li>Categories and Tags: Organizational tools that help visitors find content based on specific topics or themes.</li>
                                  <li>Author Insights: Personal or professional perspectives, tips, and advice relevant to your audience.</li>
                                  <li>Comments Section: An area where readers can engage with the content and share their thoughts.</li>
                              </ul>
                              <p>Example Content:</p>
                              <p><strong>For a Business Blog:</strong> "Our blog features articles on emerging technology trends, case studies of successful implementations, and expert opinions on industry developments. Stay updated with our latest insights and participate in discussions on how technology is shaping the future."</p>
                              <p><strong>For a Personal Blog:</strong> "Explore my thoughts on a variety of topics, from travel adventures to tips on creative writing. My blog is where I share personal experiences, provide advice, and connect with readers who share similar interests."</p>
                      `
const content=`<p>Description: The "Contact" section provides essential information for reaching out to the person or organization. It facilitates communication through various channels and often includes:</p>
                              <ul>
                                  <li>Contact Form: A form where visitors can submit inquiries or messages directly.</li>
                                  <li>Email Address: A direct email address for correspondence.</li>
                                  <li>Phone Number: A contact number for immediate or more personal communication.</li>
                                  <li>Social Media Links: Links to profiles on platforms like LinkedIn, Twitter, or Facebook for additional contact options.</li>
                                  <li>Office Address: For businesses, a physical address where visitors or clients can reach you.</li>
                              </ul>
                              <p>Example Content:</p>
                              <p><strong>For a Business Contact Page:</strong> "We’d love to hear from you! Use the contact form below to send us a message, or reach us via email at contact@ourcompany.com. For urgent matters, call us at (123) 456-7890. Follow us on LinkedIn for updates and connect with us on Twitter for the latest news."</p>
                              <p><strong>For a Personal Contact Page:</strong> "If you’d like to get in touch, please use the form below or email me directly at jane.doe@example.com. You can also reach me by phone at (123) 456-7890. Connect with me on social media for updates and more personal interactions."</p>
                      `
                      
$(document).ready(function(){
        console.log("script");
      $(".menuA").on("click",(event)=>{
        event.preventDefault();
        const hedline=$(event.currentTarget).text().trim();
        console.log(hedline);
        
        switch(hedline){

          case"About":
          $(".headline").text(hedline);//About
          $(".Description").html(about)
          break;

          case"Resume":
          $(".headline").text(hedline);//Resume
          $(".Description").html(Resume )
          break;

          case"Contact":
          $(".headline").text(hedline);//Contact
          $(".Description").html(content)
          break;

          case "Blog":
          $(".headline").text(hedline);//Blog
            $(".Description").html(Blog)
          break;

          default:
            console.log("error")
        }
        console.log(hedline);
      })
})
