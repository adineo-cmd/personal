export default {
  "label": "Digital & Data Architecture",
  "icon": "🖥️",
  "color": "#83a598",
  "group": "Domains",
  "sub": "Data Fluency, Information Filtering, Cyber Awareness",
  "subdomains": [
    {
      "name": "Data Fluency",
      "techniques": [
        {
          "id": "da-data-001",
          "name": "Statistical Literacy Foundation",
          "desc": "Learn basic statistical concepts like mean, median, standard deviation, and p-values",
          "timing": "30min weekly study",
          "recovery": "Apply one concept to a real dataset",
          "example": "Read a news study and identify if the sample size is statistically significant\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-data-002",
          "name": "Data Visualization Interpretation",
          "desc": "Analyze charts and graphs to extract accurate insights without being misled by visual scaling",
          "timing": "When reviewing dashboards or reports",
          "recovery": "Summarize the core insight in one sentence",
          "example": "Notice a bar chart starts at 50 instead of 0, exaggerating a 2% difference\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-003",
          "name": "Correlation vs Causation Distinction",
          "desc": "Identify when two variables move together versus when one actually causes the other",
          "timing": "During data analysis or reading studies",
          "recovery": "List 3 potential confounding variables",
          "example": "Notice ice cream sales and drowning both rise in summer; identify heat as the confounding variable\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-004",
          "name": "Sample Size Significance Assessment",
          "desc": "Evaluate if a dataset is large enough to draw reliable conclusions without bias",
          "timing": "Before trusting survey or study results",
          "recovery": "Discard or flag underpowered data",
          "example": "Reject a customer feedback trend based on only 5 responses; wait for n=50+\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-005",
          "name": "Data Cleaning Awareness",
          "desc": "Recognize missing values, duplicates, and outliers that can skew analysis",
          "timing": "Before analyzing any new dataset",
          "recovery": "Document data quality issues",
          "example": "Find and remove duplicate user entries before calculating average retention rates\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-006",
          "name": "Database Query Logic",
          "desc": "Understand basic SQL or NoSQL logic to retrieve specific data without relying on engineers",
          "timing": "When needing custom data pulls",
          "recovery": "Verify query results against expectations",
          "example": "Write a simple SELECT query to find users who signed up in the last 7 days\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-007",
          "name": "Data Storytelling Structure",
          "desc": "Structure data presentations with a clear context, conflict, and resolution narrative",
          "timing": "When presenting metrics to stakeholders",
          "recovery": "Ensure the audience understands the 'so what'",
          "example": "Present churn data by showing the problem, the financial impact, and the proposed solution\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-008",
          "name": "Metric Definition Precision",
          "desc": "Define exactly how a metric is calculated to prevent misinterpretation across teams",
          "timing": "When establishing new KPIs",
          "recovery": "Document the metric formula and edge cases",
          "example": "Define 'Active User' specifically as 'logged in and completed one action', not just 'opened app'\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-009",
          "name": "Bias Detection in Data",
          "desc": "Identify selection, survivorship, or confirmation biases that distort data representation",
          "timing": "During data collection and analysis",
          "recovery": "Adjust methodology to mitigate bias",
          "example": "Notice survey only reaches email users; recognize survivorship bias against churned customers\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-010",
          "name": "Trend vs Anomaly Identification",
          "desc": "Distinguish between long-term directional trends and short-term statistical noise",
          "timing": "When reviewing time-series data",
          "recovery": "Focus strategic efforts on the trend",
          "example": "Ignore a one-day traffic spike; focus on the 6-month downward trend in organic search\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-011",
          "name": "Probability Distribution Recognition",
          "desc": "Understand normal, skewed, and power-law distributions to interpret data correctly",
          "timing": "When analyzing data spread",
          "recovery": "Apply appropriate statistical models",
          "example": "Recognize wealth distribution follows a power law, not a normal bell curve\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-012",
          "name": "Confidence Interval Interpretation",
          "desc": "Understand the range of values within which a population parameter is expected to fall",
          "timing": "When evaluating study margins of error",
          "recovery": "Communicate uncertainty clearly to stakeholders",
          "example": "Report that conversion rate is 10% ± 2% with 95% confidence, not just a flat 10%\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-013",
          "name": "Data Source Evaluation",
          "desc": "Assess the reliability, methodology, and potential agendas behind data sources",
          "timing": "Before incorporating external data",
          "recovery": "Weight data sources by credibility",
          "example": "Trust peer-reviewed clinical trials over a supplement company's internal whitepaper\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-data-014",
          "name": "Longitudinal Data Analysis",
          "desc": "Analyze data from the same subjects over extended periods to identify developmental patterns",
          "timing": "For cohort or user lifecycle analysis",
          "recovery": "Identify long-term retention drivers",
          "example": "Track user engagement month-over-month for 2 years to find the true lifetime value curve\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-015",
          "name": "Cohort Analysis Framework",
          "desc": "Group users by shared characteristics or start dates to compare behavior over time",
          "timing": "When evaluating product changes or marketing",
          "recovery": "Isolate the impact of specific variables",
          "example": "Compare retention of users acquired via Facebook ads vs. organic search over 90 days\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-016",
          "name": "Funnel Analysis Application",
          "desc": "Map and measure user progression through sequential steps to find drop-off points",
          "timing": "When optimizing conversions or user flows",
          "recovery": "Target the biggest bottleneck for improvement",
          "example": "Discover 80% of users drop off at the payment page; investigate friction there\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-017",
          "name": "A/B Testing Comprehension",
          "desc": "Understand hypothesis testing, control vs variant, and statistical significance in experiments",
          "timing": "When designing or reading product tests",
          "recovery": "Make data-backed decisions on feature rollouts",
          "example": "Run a test changing button color; wait until p-value < 0.05 before declaring a winner\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-018",
          "name": "Regression Analysis Intuition",
          "desc": "Grasp how multiple independent variables impact a dependent variable to predict outcomes",
          "timing": "When modeling complex business drivers",
          "recovery": "Identify the highest-impact levers",
          "example": "Model how price, ad spend, and seasonality together predict monthly sales volume\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-019",
          "name": "Data Privacy Ethics",
          "desc": "Ensure data collection and usage comply with privacy laws and ethical standards",
          "timing": "During product design and data strategy",
          "recovery": "Anonymize or delete sensitive PII",
          "example": "Hash user emails before storing them in the analytics database to protect privacy\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-020",
          "name": "Algorithmic Bias Recognition",
          "desc": "Identify how training data can cause machine learning models to discriminate or err",
          "timing": "When deploying or evaluating AI models",
          "recovery": "Retrain models with diverse, representative data",
          "example": "Notice a hiring algorithm penalizes resumes from women's colleges; retrain on balanced data\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-021",
          "name": "Predictive Model Skepticism",
          "desc": "Question the assumptions, limitations, and potential overfitting of predictive models",
          "timing": "When relying on forecasts or ML outputs",
          "recovery": "Maintain human oversight on critical predictions",
          "example": "Don't blindly trust a sales forecast; check if the model accounted for the recent market crash\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-022",
          "name": "Data Literacy Vocabulary",
          "desc": "Master standard data terms (ETL, API, schema, latency) to communicate effectively with tech teams",
          "timing": "Ongoing learning and cross-functional meetings",
          "recovery": "Clearer communication with engineering",
          "example": "Use the term 'latency' instead of 'slowness' when discussing database performance\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-data-023",
          "name": "Dashboard Design Principles",
          "desc": "Create or interpret dashboards that prioritize actionable insights over visual clutter",
          "timing": "When building or reviewing BI tools",
          "recovery": "Remove vanity metrics; focus on KPIs",
          "example": "Redesign a cluttered dashboard to highlight only the 3 metrics that drive daily decisions\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-024",
          "name": "Data-Driven Decision Protocol",
          "desc": "Establish a team rule that major decisions require supporting data, not just intuition",
          "timing": "During strategic planning and reviews",
          "recovery": "Reduced bias in organizational choices",
          "example": "Require a brief data brief before approving any new marketing channel investment\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-025",
          "name": "Statistical Fallacy Avoidance",
          "desc": "Avoid common traps like the base rate fallacy, gambler's fallacy, or Simpson's paradox",
          "timing": "When interpreting probabilities and trends",
          "recovery": "More accurate risk assessment",
          "example": "Recognize that a positive test result for a rare disease still has a high false positive rate\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-026",
          "name": "Data Aggregation Awareness",
          "desc": "Understand how rolling up data (e.g., daily to monthly) can hide critical micro-trends",
          "timing": "When reviewing summarized reports",
          "recovery": "Drill down into raw data when needed",
          "example": "Monthly revenue looks flat, but daily data reveals a massive drop in the last week\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-027",
          "name": "Real-time Data Interpretation",
          "desc": "Make rapid decisions based on streaming data while accounting for noise and latency",
          "timing": "During live events, trading, or operations",
          "recovery": "Balance speed with accuracy",
          "example": "Adjust server load balancing in real-time based on incoming traffic spikes\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-028",
          "name": "Data Quality Assurance",
          "desc": "Implement automated checks and alerts for data pipeline failures or anomalies",
          "timing": "During data engineering and maintenance",
          "recovery": "High trust in downstream analytics",
          "example": "Set an alert if daily active users drop by more than 20% compared to the 7-day average\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-data-029",
          "name": "Cross-Functional Data Translation",
          "desc": "Translate complex data findings into simple, business-relevant language for non-technical stakeholders",
          "timing": "When presenting to leadership or clients",
          "recovery": "Alignment across the organization",
          "example": "Explain a complex clustering algorithm as 'grouping customers by similar buying habits'\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-data-030",
          "name": "Integrated Data Fluency System",
          "desc": "Combine statistical literacy, visualization, and storytelling into a seamless analytical workflow",
          "timing": "Ongoing professional practice",
          "recovery": "Masterful ability to leverage data for advantage",
          "example": "Pull raw data, clean it, analyze trends, visualize insights, and present a compelling narrative to the board\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        }
      ]
    },
    {
      "name": "Information Filtering",
      "techniques": [
        {
          "id": "da-filter-001",
          "name": "Signal-to-Noise Ratio Optimization",
          "desc": "Actively seek high-signal sources and ruthlessly eliminate low-signal, high-noise inputs",
          "timing": "During media diet planning",
          "recovery": "Reduced cognitive load, higher insight quality",
          "example": "Unsubscribe from 20 low-value newsletters; subscribe to 2 deep-dive industry journals\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-002",
          "name": "Algorithmic Feed Curation",
          "desc": "Train recommendation algorithms by consistently engaging with high-quality content and ignoring clickbait",
          "timing": "Daily social media usage",
          "recovery": "Feeds that educate and inspire rather than distract",
          "example": "Click 'Not Interested' on outrage bait; like and save deep technical tutorials\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-filter-003",
          "name": "Source Hierarchy Establishment",
          "desc": "Rank information sources by credibility and depth; prioritize primary sources over secondary commentary",
          "timing": "When researching a topic",
          "recovery": "More accurate foundational knowledge",
          "example": "Read the actual research paper instead of a journalist's summary of the research paper\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-004",
          "name": "Attention Budget Allocation",
          "desc": "Treat attention as a finite daily currency; consciously 'spend' it only on high-ROI information",
          "timing": "Daily planning and execution",
          "recovery": "Protected focus for deep work",
          "example": "Allocate 1 hour to news, 4 hours to deep learning; refuse to spend 'budget' on Twitter drama\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-005",
          "name": "Digital Minimalism Protocol",
          "desc": "Remove digital tools that don't provide massive, direct value to your core goals",
          "timing": "Quarterly digital audit",
          "recovery": "Reclaimed time and mental clarity",
          "example": "Delete all social media apps from phone; only access them on desktop for 30 mins a week\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-006",
          "name": "Information Diet Design",
          "desc": "Curate a specific list of books, podcasts, and creators that align with your learning goals",
          "timing": "Annual or bi-annual planning",
          "recovery": "Consistent, high-quality intellectual nutrition",
          "example": "Create a 'reading list' of 10 core books for the year; ignore random trending articles\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-filter-007",
          "name": "Echo Chamber Detection",
          "desc": "Identify when your information sources only reinforce your existing beliefs; inject opposing views",
          "timing": "During political or ideological research",
          "recovery": "More nuanced, robust worldview",
          "example": "Follow 2 highly credible thinkers who disagree with your core political stance\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-filter-008",
          "name": "Clickbait Immunity Training",
          "desc": "Recognize emotional manipulation in headlines; refuse to click until you verify the actual content",
          "timing": "When browsing news or feeds",
          "recovery": "Reduced emotional reactivity and time waste",
          "example": "See headline 'You Won't Believe...'; recognize the manipulation, scroll past without clicking\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-filter-009",
          "name": "Notification Triage System",
          "desc": "Categorize notifications into 'urgent', 'important', and 'ignore'; disable all but the first two",
          "timing": "Device setup and weekly review",
          "recovery": "Interruption-free deep work blocks",
          "example": "Allow calls and texts from family; mute all app notifications, email badges, and news alerts\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-filter-010",
          "name": "Content Skimming vs Deep Reading",
          "desc": "Consciously decide if a piece of content warrants a 10-second skim or a 30-minute deep read",
          "timing": "Before consuming any article or video",
          "recovery": "Optimized time investment per piece of content",
          "example": "Skim the intro and conclusion of a blog post; only read fully if it contains a novel framework\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-011",
          "name": "Information Expiration Dating",
          "desc": "Recognize that news and trending topics have a half-life; stop consuming expired information",
          "timing": "When following current events",
          "recovery": "Focus on evergreen principles over fleeting drama",
          "example": "Ignore the daily political scandal; read a book on the history of geopolitical strategy instead\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-012",
          "name": "Cross-Platform Verification",
          "desc": "Verify controversial or surprising claims by checking 3 independent, high-credibility sources",
          "timing": "When encountering sensational claims",
          "recovery": "Accurate understanding of reality",
          "example": "See a viral quote; search for the original video transcript to verify context before sharing\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-013",
          "name": "Cognitive Load Filtering",
          "desc": "Stop consuming information when mentally fatigued; quality of processing drops drastically",
          "timing": "During long study or work sessions",
          "recovery": "Prevented mental burnout and garbage encoding",
          "example": "Close the book after 2 hours of intense reading; your brain can't encode more effectively\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-filter-014",
          "name": "Information Fasting Practice",
          "desc": "Take scheduled breaks from all non-essential information input to let the brain process and consolidate",
          "timing": "Weekly or monthly digital sabbaths",
          "recovery": "Enhanced creativity and original thought",
          "example": "No podcasts, music, or reading during a 2-hour walk; let your mind wander and synthesize\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-filter-015",
          "name": "Curated Subscription Management",
          "desc": "Regularly audit and cancel paid subscriptions, newsletters, and feeds that no longer serve you",
          "timing": "Monthly financial and digital review",
          "recovery": "Reduced financial and attention drain",
          "example": "Cancel 3 Substacks you haven't read in a month; reallocate that money to a high-value course\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-filter-016",
          "name": "Search Query Optimization",
          "desc": "Use advanced search operators (site:, filetype:, -) to bypass SEO spam and find precise data",
          "timing": "During research and problem-solving",
          "recovery": "Faster, more accurate information retrieval",
          "example": "Search 'site:gov filetype:pdf climate report' to find official data instead of blog posts\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-017",
          "name": "Information Overload Recovery",
          "desc": "When overwhelmed, stop inputting entirely; write down what you already know to clear RAM",
          "timing": "During research paralysis",
          "recovery": "Clarity and reduced anxiety",
          "example": "Stop reading tabs; open a blank doc and brain-dump your current understanding of the topic\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-018",
          "name": "Bias-Checking Protocol",
          "desc": "Ask 'What is the author's incentive for telling me this?' before accepting any information",
          "timing": "When consuming sponsored or opinionated content",
          "recovery": "Critical distance from manipulation",
          "example": "Reading a finance blog; realize the author sells the course they are recommending\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-019",
          "name": "Information Value Assessment",
          "desc": "Rate information on a scale of 1-10 for actionability; discard anything below a 7",
          "timing": "When deciding what to learn or save",
          "recovery": "Focus on high-leverage, applicable knowledge",
          "example": "Skip the theoretical physics article; focus on the productivity system you can implement today\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-filter-020",
          "name": "Digital Distraction Blocking",
          "desc": "Use website blockers and app limits to physically prevent access to low-value information sinks",
          "timing": "During deep work or study blocks",
          "recovery": "Forced compliance with attention goals",
          "example": "Use Freedom app to block YouTube and Reddit from 9 AM to 12 PM every weekday\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-filter-021",
          "name": "Information Synthesis Practice",
          "desc": "After consuming information, force yourself to summarize it in 3 bullet points to prove comprehension",
          "timing": "After reading a chapter or article",
          "recovery": "Verified understanding and retention",
          "example": "Read a 20-page report; write down the 3 core takeaways before moving to the next task\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-022",
          "name": "Context Collapse Navigation",
          "desc": "Recognize when social media flattens nuance; seek long-form contexts for complex issues",
          "timing": "When viewing Twitter/X or short-form video",
          "recovery": "Preserved nuance and critical thinking",
          "example": "See a heated 280-character debate; go read the author's full 3,000-word essay to understand context\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-filter-023",
          "name": "Information Archiving Strategy",
          "desc": "Use tools like Obsidian, Notion, or Readwise to capture and organize high-signal information for future retrieval",
          "timing": "When encountering valuable insights",
          "recovery": "Build a personal, searchable knowledge base",
          "example": "Highlight key passages in Kindle; auto-sync to Readwise; review highlights weekly in Obsidian\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-024",
          "name": "Media Literacy Application",
          "desc": "Analyze the medium itself (video vs text vs audio) and how it shapes the message being delivered",
          "timing": "When consuming diverse media formats",
          "recovery": "Understanding of medium bias",
          "example": "Recognize that a 60-second TikTok cannot convey the nuance of a complex geopolitical conflict\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-filter-025",
          "name": "Information Fatigue Management",
          "desc": "Recognize the physical symptoms of information fatigue (eye strain, irritability) and step away",
          "timing": "Throughout the day",
          "recovery": "Restored cognitive baseline",
          "example": "Feel a headache coming on after 3 hours of screen time; close laptop and go for a walk\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-filter-026",
          "name": "High-Signal Network Building",
          "desc": "Curate your personal and professional network to include people who share deep, valuable insights",
          "timing": "Ongoing relationship building",
          "recovery": "Elevated default information environment",
          "example": "Join a private mastermind group of founders; the peer-to-peer signal is higher than any podcast\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-filter-027",
          "name": "Information Triage Speed",
          "desc": "Develop the ability to decide within 10 seconds if a piece of content is worth your time",
          "timing": "When browsing feeds or inboxes",
          "recovery": "Massive time savings over a lifetime",
          "example": "Glance at an email subject and first sentence; delete immediately if it's not actionable or relevant\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-028",
          "name": "Digital Boundary Enforcement",
          "desc": "Communicate and enforce your availability and information consumption limits with others",
          "timing": "When others demand your attention",
          "recovery": "Protected time and mental space",
          "example": "Tell team: 'I check Slack at 12 PM and 4 PM only'; turn off notifications outside those times\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-filter-029",
          "name": "Information Relevance Calibration",
          "desc": "Regularly reassess if the information you consume still aligns with your current goals and stage of life",
          "timing": "Quarterly life and goal reviews",
          "recovery": "Aligned, purpose-driven learning",
          "example": "Stop consuming beginner coding tutorials; shift to advanced system design content as your career evolves\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-filter-030",
          "name": "Integrated Information Filtering System",
          "desc": "Combine curation, blocking, synthesis, and archiving into a seamless personal information architecture",
          "timing": "Ongoing lifestyle integration",
          "recovery": "Masterful control over your cognitive inputs",
          "example": "Use RSS for high-signal blogs, block social media, synthesize notes weekly, archive in a Zettelkasten\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        }
      ]
    },
    {
      "name": "Cyber Awareness",
      "techniques": [
        {
          "id": "da-cyber-001",
          "name": "Threat Modeling Protocol",
          "desc": "Identify your most valuable digital assets and the specific threats that target them",
          "timing": "Annual personal or business security review",
          "recovery": "Prioritized security investments",
          "example": "Identify that your crypto wallet and email are high-value targets; focus security efforts there\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-002",
          "name": "Password Hygiene Optimization",
          "desc": "Use a password manager to generate and store unique, 16+ character passwords for every account",
          "timing": "Ongoing account creation and management",
          "recovery": "Elimination of credential stuffing risks",
          "example": "Generate a random 20-character password for your bank; never reuse it anywhere else\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-cyber-003",
          "name": "Multi-Factor Authentication Mastery",
          "desc": "Enable MFA on all critical accounts; prefer authenticator apps or hardware keys over SMS",
          "timing": "During account security setup",
          "recovery": "Protection against password theft",
          "example": "Switch your bank MFA from SMS text codes to an app like Authy or a YubiKey\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-cyber-004",
          "name": "Phishing Detection Training",
          "desc": "Analyze emails and messages for urgency, mismatched URLs, and suspicious sender addresses",
          "timing": "When receiving unexpected requests",
          "recovery": "Prevented credential theft",
          "example": "Notice an email from 'Paypa1-support.com' asking for immediate login; recognize the phishing attempt\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-005",
          "name": "Digital Footprint Minimization",
          "desc": "Audit and delete old accounts, remove personal info from data broker sites, and limit public sharing",
          "timing": "Bi-annual digital cleanup",
          "recovery": "Reduced attack surface for social engineering",
          "example": "Use a service like DeleteMe to remove your home address and phone number from public directories\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-cyber-006",
          "name": "Privacy Settings Audit",
          "desc": "Review and tighten privacy settings on all social media, devices, and apps to limit data collection",
          "timing": "After major app updates or annually",
          "recovery": "Reduced unauthorized data harvesting",
          "example": "Disable location tracking for all apps except maps; turn off ad personalization in OS settings\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-007",
          "name": "Social Engineering Defense",
          "desc": "Verify the identity of anyone requesting sensitive information or actions, even if they seem familiar",
          "timing": "When receiving unusual requests",
          "recovery": "Prevented unauthorized access",
          "example": "CEO emails asking for urgent wire transfer; call the CEO on a known internal number to verify\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-cyber-008",
          "name": "Network Security Basics",
          "desc": "Secure home Wi-Fi with WPA3, change default router passwords, and segment IoT devices",
          "timing": "Initial network setup and annual review",
          "recovery": "Protected local network perimeter",
          "example": "Create a separate 'Guest' Wi-Fi network for smart bulbs and visitors to isolate them from your PC\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-009",
          "name": "Encryption Literacy",
          "desc": "Understand when data is encrypted in transit (HTTPS) and at rest (device encryption); enforce both",
          "timing": "When transmitting or storing sensitive data",
          "recovery": "Data protection against interception",
          "example": "Ensure your laptop has BitLocker or FileVault enabled to protect data if the device is stolen\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-010",
          "name": "Device Security Hardening",
          "desc": "Keep OS and software updated, disable unused ports/services, and use endpoint protection",
          "timing": "Monthly maintenance routine",
          "recovery": "Patched vulnerabilities and reduced attack vectors",
          "example": "Enable auto-updates for your phone and laptop; restart weekly to apply security patches\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-011",
          "name": "Data Backup Strategy",
          "desc": "Implement the 3-2-1 backup rule: 3 copies, 2 different media, 1 offsite or cloud",
          "timing": "Initial setup and monthly verification",
          "recovery": "Resilience against ransomware and hardware failure",
          "example": "Backup laptop to local NAS, plus an encrypted cloud backup; test restoring a file quarterly\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-012",
          "name": "Incident Response Planning",
          "desc": "Create a step-by-step plan for what to do if accounts are compromised or devices are lost",
          "timing": "Before an incident occurs",
          "recovery": "Rapid, calm, and effective recovery",
          "example": "Plan includes: freeze credit, change passwords from a clean device, notify bank, scan for malware\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-cyber-013",
          "name": "Public Wi-Fi Risk Management",
          "desc": "Avoid sensitive transactions on public Wi-Fi; use a trusted VPN if you must connect",
          "timing": "When traveling or working remotely",
          "recovery": "Protected data in transit",
          "example": "Never check banking apps at the airport; use your phone's cellular hotspot or a VPN instead\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-cyber-014",
          "name": "App Permission Auditing",
          "desc": "Review and revoke unnecessary permissions (camera, mic, contacts) granted to mobile and desktop apps",
          "timing": "Quarterly device review",
          "recovery": "Reduced spyware and data leak risks",
          "example": "Revoke the flashlight app's permission to access your contacts and precise location\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-cyber-015",
          "name": "Identity Theft Prevention",
          "desc": "Freeze your credit with major bureaus and monitor financial statements for unauthorized activity",
          "timing": "Annually or after a known data breach",
          "recovery": "Protected financial identity",
          "example": "Place a credit freeze; unfreeze temporarily only when applying for a new loan or credit card\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-016",
          "name": "Secure Communication Channels",
          "desc": "Use end-to-end encrypted messaging (Signal) for sensitive conversations; avoid SMS for secrets",
          "timing": "When discussing private or confidential matters",
          "recovery": "Confidentiality of communications",
          "example": "Discuss a surprise party or business merger on Signal, not via standard text messages or email\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-017",
          "name": "Digital Opsec (Operations Security)",
          "desc": "Separate your online identities and avoid cross-contamination between personal and professional lives",
          "timing": "Ongoing digital behavior",
          "recovery": "Reduced doxxing and targeting risks",
          "example": "Use a dedicated email and username for gaming or forums; never link it to your real name or main email\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-cyber-018",
          "name": "Malware Recognition",
          "desc": "Identify signs of infection: sudden slowdowns, unexpected pop-ups, or fans running at max speed",
          "timing": "When device behavior is anomalous",
          "recovery": "Early detection and containment",
          "example": "Browser keeps redirecting to strange search engines; run a deep scan with Malwarebytes immediately\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-cyber-019",
          "name": "Two-Factor Authentication Recovery",
          "desc": "Generate and securely store backup MFA codes in case you lose your phone or authenticator device",
          "timing": "When setting up MFA",
          "recovery": "Prevented account lockout",
          "example": "Print the 10 backup codes for your Google account; store them in a physical safe at home\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-020",
          "name": "Credential Stuffing Awareness",
          "desc": "Understand that hackers use leaked password lists to try logging into your other accounts",
          "timing": "After major corporate data breaches are announced",
          "recovery": "Proactive password changes",
          "example": "Hear about the Adobe breach; immediately change your password on any site where you reused it\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-021",
          "name": "Physical Security Integration",
          "desc": "Use webcam covers, privacy screens, and secure physical access to devices to prevent hardware hacks",
          "timing": "Daily device usage",
          "recovery": "Protection against physical surveillance",
          "example": "Slide a cover over your laptop webcam when not in use; use a privacy filter in coffee shops\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-cyber-022",
          "name": "Data Breach Response Protocol",
          "desc": "Know how to check if your data was compromised (HaveIBeenPwned) and rotate credentials immediately",
          "timing": "When notified of a breach or annually",
          "recovery": "Mitigated impact of third-party failures",
          "example": "Check your email on HaveIBeenPwned; find a breach; change that password and enable MFA\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-023",
          "name": "Privacy-Preserving Tools Usage",
          "desc": "Utilize tools like encrypted email (ProtonMail), private browsers (Brave), and secure DNS",
          "timing": "Daily digital operations",
          "recovery": "Reduced tracking and profiling",
          "example": "Switch default browser to Brave; use uBlock Origin to stop malicious ads and trackers\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-024",
          "name": "Digital Identity Separation",
          "desc": "Maintain distinct personas or aliases for different online communities to prevent cross-referencing",
          "timing": "When participating in public forums",
          "recovery": "Enhanced anonymity and privacy",
          "example": "Use a pseudonym for Reddit and GitHub; ensure no real-name links exist in the profiles\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-cyber-025",
          "name": "Secure Browsing Practices",
          "desc": "Verify HTTPS, avoid clicking suspicious links, and use DNS-over-HTTPS to prevent ISP tracking",
          "timing": "All web navigation",
          "recovery": "Safer, more private browsing sessions",
          "example": "Check for the padlock icon before entering credit card info; ignore 'Your PC is infected' pop-ups\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-cyber-026",
          "name": "Cyber Hygiene Routine",
          "desc": "Establish a weekly or monthly checklist for updates, backups, and security audits",
          "timing": "Scheduled maintenance time",
          "recovery": "Consistent, baseline security posture",
          "example": "Every Sunday: restart devices, check backup status, review password manager for weak passwords\"",
          "tags": [
            "beginner"
          ],
          "diff": "d-beg"
        },
        {
          "id": "da-cyber-027",
          "name": "Threat Intelligence Monitoring",
          "desc": "Follow reputable cybersecurity news to stay aware of new scams, vulnerabilities, and attack vectors",
          "timing": "Weekly reading or podcast listening",
          "recovery": "Proactive defense against emerging threats",
          "example": "Read the Krebs on Security blog to learn about a new SIM-swapping attack; secure your carrier PIN\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-cyber-028",
          "name": "Social Media Privacy Lockdown",
          "desc": "Set all social profiles to private, hide friend lists, and disable facial recognition tagging",
          "timing": "Initial setup and annual review",
          "recovery": "Reduced social engineering and stalking risks",
          "example": "Change Facebook to 'Friends Only' for all past and future posts; turn off location data in photos\"",
          "tags": [
            "intermediate"
          ],
          "diff": "d-int"
        },
        {
          "id": "da-cyber-029",
          "name": "Incident Post-Mortem Analysis",
          "desc": "After a security scare or breach, analyze how it happened and update protocols to prevent recurrence",
          "timing": "Immediately after resolving an incident",
          "recovery": "Improved security architecture",
          "example": "Got a virus from a USB drive; implement a policy to never plug in unknown USBs and install endpoint protection\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        },
        {
          "id": "da-cyber-030",
          "name": "Integrated Cyber Awareness System",
          "desc": "Combine threat modeling, hygiene, privacy tools, and incident response into a comprehensive security lifestyle",
          "timing": "Ongoing digital life management",
          "recovery": "Masterful personal and organizational security",
          "example": "Maintain unique passwords, MFA everywhere, encrypted backups, minimal footprint, and continuous threat awareness\"",
          "tags": [
            "advanced"
          ],
          "diff": "d-adv"
        }
      ]
    }
  ]
};
