export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "storming-the-kingdom",
    title: "Storming the Kingdom",
    date: "2025-03-04",
    author: "Tree Workers' Industrial Group",
    excerpt:
      "The Tree Workers' Industrial Group (TWIG) has taken over administration of King Kong Reforestation, the largest Facebook group for treeplanters.",
    featuredImage: "/blog/twig-organizational.png",
    content: `
      <p class="mb-4">
        The Tree Workers' Industrial Group (TWIG) has announced a significant organizational development: the takeover of administration for King Kong Reforestation, the largest Facebook group for tree planters across North America.
      </p>
      <p class="mb-4">
        This move comes after previous censorship efforts that limited worker organizing discussions within the group. With TWIG now in control, the group will serve as a renewed platform for collective organizing and worker solidarity.
      </p>
      <p class="mb-4">
        <strong>Get Involved:</strong>
      </p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Email: <a href="mailto:treeworkersindustrialgroup@gmail.com" class="text-green-700 underline">treeworkersindustrialgroup@gmail.com</a></li>
        <li>Attend the REKINDLE event</li>
        <li>Express interest in organizer training through our contact form</li>
      </ul>
      <p class="mb-4">
        This represents a major step forward in creating spaces for tree workers to discuss their rights, share experiences, and build collective power within the silviculture industry.
      </p>
    `,
  },
  {
    slug: "the-tree-workers-industrial-group",
    title: "The Tree Worker's Industrial Group",
    date: "2020-11-18",
    author: "Tree Workers' Industrial Group",
    excerpt:
      "Founded in October 2018, TWIG has grown from initial outreach at Off-Season Boxfire to a multi-committee organization advancing worker rights across Canada.",
    featuredImage: "/blog/planting-camp.png",
    content: `
      <p class="mb-4">
        The Tree Workers' Industrial Group (TWIG) was founded in October 2018 with a mission to advocate for workers in the silviculture industry across so-called Canada.
      </p>
      <h2 class="heading text-2xl mb-3 mt-6">Our Origins</h2>
      <p class="mb-4">
        TWIG's initial outreach began at the Off-Season Boxfire event, where organizers connected with tree planters to discuss common challenges and the need for collective representation.
      </p>
      <h2 class="heading text-2xl mb-3 mt-6">Committee Structure</h2>
      <p class="mb-4">
        TWIG has developed a comprehensive committee structure to address multiple facets of worker advocacy:
      </p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li><strong>Sexual Violence Prevention:</strong> Developing policies and awareness campaigns for tree-planting companies</li>
        <li><strong>Worker's Rights:</strong> Advocating for and promoting legal rights of workers</li>
        <li><strong>Communications:</strong> Managing outreach and information sharing</li>
        <li><strong>Event Planning:</strong> Organizing gatherings and actions</li>
        <li><strong>Indigenous Solidarity:</strong> Building relationships and supporting indigenous land rights</li>
      </ul>
      <h2 class="heading text-2xl mb-3 mt-6">Accomplishments</h2>
      <p class="mb-4">
        Since our founding, TWIG has been involved in collective action at multiple planting companies, successfully returning over $60,000 of stolen wages to workers' pockets.
      </p>
      <p class="mb-4">
        We continue to grow and welcome new members who share our commitment to worker empowerment, transparency, and justice in the silviculture industry.
      </p>
    `,
  },
  {
    slug: "treehab",
    title: "Treehab: A Treeplanter's Effort to Support Recovering Addicts",
    date: "2020-02-27",
    author: "Tree Workers' Industrial Group",
    excerpt:
      "Nathan Gregg's innovative pilot program combines tree planting with addiction recovery, partnering with Tree Amigos cooperative and Community Residential Facility.",
    featuredImage: "/blog/tree-planter.png",
    content: `
      <p class="mb-4">
        In an innovative approach to addiction recovery, tree planter Nathan Gregg launched a pilot rehabilitation program that combines the physical and mental benefits of tree planting with structured recovery support.
      </p>
      <h2 class="heading text-2xl mb-3 mt-6">The Treehab Program</h2>
      <p class="mb-4">
        The program represents a unique collaboration between Tree Amigos cooperative and the Community Residential Facility 'Aghelh Nebun. It offers participants a chance to work outdoors, earn income, and build community while maintaining their recovery journey.
      </p>
      <h2 class="heading text-2xl mb-3 mt-6">How It Works</h2>
      <p class="mb-4">
        Participants engage in tree planting work during the season while receiving ongoing support for their recovery. The program recognizes that meaningful work, connection to nature, and peer support can be powerful tools in overcoming addiction.
      </p>
      <p class="mb-4">
        Tree planting provides:
      </p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Physical activity and outdoor work</li>
        <li>A sense of purpose and accomplishment</li>
        <li>Income and financial stability</li>
        <li>Community and peer support</li>
        <li>Connection to land and environmental stewardship</li>
      </ul>
      <h2 class="heading text-2xl mb-3 mt-6">Looking Forward</h2>
      <p class="mb-4">
        This pilot program demonstrates the potential for the silviculture industry to play a positive role in addressing social challenges while providing meaningful employment opportunities.
      </p>
    `,
  },
  {
    slug: "spring-2019-coast-range-petition",
    title: "Spring 2019: The Petition at Coast Range",
    date: "2020-02-04",
    author: "Tree Workers' Industrial Group",
    excerpt:
      "Workers at Coast Range organized to address employment standards violations, successfully securing $30,000 in pay adjustments through collective action.",
    featuredImage: "/blog/forest-calm.jpg",
    content: `
      <p class="mb-4">
        In Spring 2019, tree planters at Coast Range took collective action to address serious employment standards violations, demonstrating the power of worker solidarity and organization.
      </p>
      <h2 class="heading text-2xl mb-3 mt-6">The Issues</h2>
      <p class="mb-4">
        Workers identified multiple violations of employment standards, including:
      </p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Inadequate walk-in compensation</li>
        <li>Minimum tree prices below sustainable levels</li>
        <li>Unclear payment structures</li>
        <li>Delayed wage payments</li>
      </ul>
      <h2 class="heading text-2xl mb-3 mt-6">The Organizing Process</h2>
      <p class="mb-4">
        Workers came together to draft a petition outlining their concerns and demands. Through careful documentation of violations and collective discussion, they built a unified voice to present to management.
      </p>
      <p class="mb-4">
        The petition process included:
      </p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Gathering worker testimonies</li>
        <li>Documenting specific violations</li>
        <li>Researching employment standards</li>
        <li>Building consensus on demands</li>
        <li>Presenting a unified front</li>
      </ul>
      <h2 class="heading text-2xl mb-3 mt-6">The Results</h2>
      <p class="mb-4">
        Through sustained collective pressure and negotiations with management, workers successfully secured <strong>$30,000 in pay adjustments</strong>. This victory demonstrated that organized workers can enforce their rights and win concrete improvements in their working conditions.
      </p>
      <h2 class="heading text-2xl mb-3 mt-6">Lessons Learned</h2>
      <p class="mb-4">
        The Coast Range petition shows that:
      </p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Documentation is crucial - keep records of all issues</li>
        <li>Collective action is more powerful than individual complaints</li>
        <li>Knowledge of employment standards strengthens workers' positions</li>
        <li>Solidarity can win real material gains</li>
      </ul>
      <p class="mb-4">
        This campaign remains an inspiring example of worker self-organization in the silviculture industry and a model for future organizing efforts.
      </p>
    `,
  },
];
