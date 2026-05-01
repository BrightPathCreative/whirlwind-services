import {
  BriefcaseBusiness,
  CalendarDays,
  ClipboardCheck,
  Database,
  FileText,
  Headset,
  MapPin,
  ShieldCheck
} from "lucide-react";

export const site = {
  name: "Whirlwind Secretarial Services",
  shortName: "Whirlwind Services",
  domain: "https://whirlwindservices.com.au",
  linkedin: "https://www.linkedin.com/in/cath-watkins-730329242/",
  abn: "44 233 892 479",
  tagline: "Admin support without the full-time hire and agency fees",
  location: "Brighton, Victoria"
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const servicePages = [
  {
    slug: "executive-assistance",
    title: "Executive & Personal Assistance",
    shortTitle: "Executive Assistance",
    h1: "Executive Assistant Services — Melbourne & Bayside",
    subtitle: "Senior support for executives, CEOs, and business owners who need a trusted right-hand person.",
    description:
      "Senior-level diary and email management, correspondence, travel arrangements, and proactive 1:1 support for executives and business owners.",
    image: "/images/sections/calendar-planning.png",
    icon: "/images/icons/icon-briefcase.png",
    Icon: BriefcaseBusiness,
    metaTitle: "Executive Assistant Services Melbourne & Bayside",
    metaDescription:
      "Senior executive assistant services for CEOs, executives, and business owners across Melbourne CBD and Bayside. Diary management, travel, correspondence.",
    intro: [
      "There's a difference between administrative support and executive assistance and Cath sits firmly in the latter category.",
      "For over 45 years, she has worked directly with ministers, government commissioners, CEOs, and senior leaders in some of Melbourne's top consulting firms. She understands what it means to support decision-makers at the highest level: the need for absolute confidentiality, proactive thinking, and the kind of experience that means you don't need to explain everything twice.",
      "Whether you need ongoing EA support or help through a particularly demanding period, Cath works on-site at your Melbourne or Bayside premises, remotely, or a combination of both."
    ],
    included: [
      ["Diary & Email Management", "Outlook scheduling, meeting coordination, and inbox management so your day is structured and your priorities are protected."],
      ["Appointments", "From medical and personal appointments to board meetings and site visits, Cath manages your schedule so nothing falls through the cracks."],
      ["Travel & Accommodation Arrangements", "Flights, hotels, transfers, and full itineraries planned thoroughly and confirmed in advance."],
      ["Progress Reports on Outstanding Matters", "Regular updates on where things stand, what's pending, and what needs your attention."],
      ["Reports, Briefs & Correspondence", "Professionally prepared documents, letters, and reports drafted to your standard and ready when you need them."],
      ["1:1 Executive Support", "Direct, focused support for you, not a rotating pool of contractors."]
    ],
    audience: [
      "Business owners who need senior-level executive support without a full-time hire",
      "Executives dealing with a back-log, a busy period, or a complex transition",
      "CEOs and directors who need a trusted, confidential right-hand person",
      "Small-to-medium teams who need EA support without the overhead of a permanent position"
    ],
    faqs: [
      ["What does an executive assistant do?", "An executive assistant handles the day-to-day administrative and organisational tasks that allow an executive or business owner to focus on their actual priorities. This includes diary management, email, correspondence, travel arrangements, meeting preparation, and proactive follow-up on outstanding matters."],
      ["What's the difference between an executive assistant and a virtual assistant?", "A virtual assistant typically handles defined, repeatable tasks, often for multiple clients at once. An executive assistant works directly with one person or organisation, understands the business deeply, and provides senior-level support that requires experience and judgement."],
      ["Do you work on-site or remotely?", "Both. Cath is available on-site at your premises across Melbourne CBD and Bayside Melbourne, and remotely for clients anywhere."],
      ["How much does an executive assistant cost in Melbourne?", "Whirlwind's pricing is based on the scope and complexity of the engagement. Daily rates, project-based pricing, and hourly rates are available depending on the nature of the work."],
      ["How do I get started?", "The best first step is a conversation. Get in touch via the contact form. Cath will then contact you to discuss what you need and how she can help."]
    ]
  },
  {
    slug: "event-management",
    title: "Event Management & Support",
    shortTitle: "Event Management",
    h1: "Event Management & Support",
    subtitle: "From boardroom meetings to large-scale corporate events, Cath offers end-to-end coordination so you can focus on what matters.",
    description:
      "End-to-end coordination for meetings, board sessions, conferences, and corporate events.",
    image: "/images/sections/meeting-room.png",
    icon: "/images/icons/icon-calendar.png",
    Icon: CalendarDays,
    metaTitle: "Event Management & Support Services Melbourne",
    metaDescription:
      "End-to-end event coordination for meetings, conferences, and corporate events across Melbourne. Venue sourcing, catering, minutes, and follow-up.",
    intro: [
      "A well-run event doesn't happen by accident. It happens because someone experienced is handling the logistics, and that's exactly what Cath does well.",
      "With a background spanning government and private sector events, Cath has coordinated everything from high-profile meetings to large-scale corporate conferences.",
      "She manages the details so you don't have to, and she does it with the quiet professionalism that makes events feel effortless, even when they aren't."
    ],
    included: [
      ["Event Planning & Logistics", "From the initial brief through to post-event wrap-up, Cath manages timelines, suppliers, attendees, and contingencies."],
      ["Venue Sourcing & Booking", "Researching and securing the right venue for your event, from CBD boardrooms to Bayside conference facilities."],
      ["Professional Catering Coordination", "Sourcing, briefing, and managing catering suppliers, including dietary requirements."],
      ["Agenda & Meeting Papers", "Clear, professionally prepared agendas and supporting papers, formatted correctly and distributed in advance."],
      ["Minute-Taking & Follow-Up Actions", "Accurate minutes, prompt distribution, and follow-up actions tracked after the meeting."],
      ["Electronic Mail-outs & Event Communications", "Invitations, reminders, RSVPs, and post-event communications managed efficiently."]
    ],
    audience: [
      "Businesses running board meetings, senior leadership sessions, or client-facing events",
      "Organisations hosting conferences, workshops, or corporate functions",
      "Teams needing professional minute-taking and post-meeting follow-up support",
      "Government and not-for-profit organisations needing experienced event coordination"
    ],
    faqs: [
      ["What types of events does Whirlwind support?", "Cath works across business events from small boardroom meetings and leadership sessions to larger corporate conferences and external-facing functions."],
      ["Do you handle virtual or hybrid events as well as in-person?", "Yes. Cath can coordinate logistics for in-person events and assist with virtual or hybrid events, including invitations, platform coordination, and supporting materials."],
      ["Can you take minutes at our meetings?", "Absolutely. Minute-taking is a core part of Cath's event management offering."],
      ["Do you work on events outside Bayside Melbourne?", "Cath's primary service area is Melbourne CBD and Bayside Melbourne. Travel outside this area is available at an additional cost."],
      ["How far in advance should I book event coordination support?", "The earlier the better for larger events. For smaller meetings and sessions, Cath can often assist with shorter notice."]
    ]
  },
  {
    slug: "records-database-management",
    title: "Records & Database Management",
    shortTitle: "Records Management",
    h1: "Records & Database Management",
    subtitle: "Clean data, structured records, and systems that actually work.",
    description:
      "Clean and maintain records systems, drawing on large-scale data consolidation experience.",
    image: "/images/sections/organised-workspace.png",
    icon: "/images/icons/icon-folder.png",
    Icon: Database,
    metaTitle: "Records & Database Management Services Melbourne",
    metaDescription:
      "Professional records management, data cleaning, and database organisation for Melbourne businesses.",
    intro: [
      "Most businesses are sitting on a mountain of information. The problem isn't usually the data, it's what's done with it.",
      "Cath has spent years working at the intersection of administration and information management, including large-scale government data consolidation projects.",
      "This isn't basic data entry. It's understanding how your information flows and making it work properly."
    ],
    included: [
      ["Electronic Records Management", "Setting up, maintaining, and improving systems for managing electronic records and correspondence."],
      ["Corporate Information Systems", "Managing and maintaining the systems your business uses to store and retrieve information."],
      ["Office Process Reviews", "A fresh look at how your administrative processes work and where they could improve."],
      ["Data Cleaning", "Reviewing and cleaning existing data so it's consistent, accurate, and easier to work with."],
      ["Data Analysis & Reporting", "Basic analysis and reporting from cleaned data, turning raw information into something useful."],
      ["Excel Spreadsheet Development", "Building structured spreadsheets with consistent fields, validation, and stakeholder management features."]
    ],
    audience: [
      "Teams with inconsistent records or sprawling spreadsheets",
      "Businesses preparing for a system clean-up or migration",
      "Organisations that need clearer reporting from existing data",
      "Leaders who want information they can find, trust, and use"
    ],
    faqs: [
      ["What does records management actually involve?", "Records management covers the organisation, maintenance, and retrieval of business information, whether emails, documents, correspondence, or database records."],
      ["What's the difference between data entry and data management?", "Data entry is inputting information. Data management makes sure that information is structured correctly, consistent, and genuinely useful."],
      ["Can you work with our existing systems?", "Yes. Cath works with whatever systems your business already uses, including Google Workspace, Excel, CRMs, or other database tools."],
      ["Do you work on-site or remotely for records and database work?", "Both. A lot of data and records work can be done remotely, while process reviews or complex structured work often benefit from an on-site session."]
    ]
  },
  {
    slug: "document-preparation-data-entry",
    title: "Document Preparation & Data Entry",
    shortTitle: "Documents & Data Entry",
    h1: "Document Preparation & Data Entry",
    subtitle: "Professional documents, accurate data, and spreadsheets that actually work.",
    description:
      "Professional formatting, spreadsheet creation and management, electronic mail-outs, and accurate data entry.",
    image: "/images/sections/documents-data.png",
    icon: "/images/icons/icon-document.png",
    Icon: FileText,
    metaTitle: "Document Preparation & Data Entry Services Melbourne",
    metaDescription:
      "Professional document formatting, accurate data entry, and Excel spreadsheet management for Melbourne businesses.",
    intro: [
      "Some tasks just need to be done accurately, quickly, and to a professional standard. That's what this is.",
      "Whether you need a document reformatted, a data-set entered and checked, or a spreadsheet built properly, Cath handles it with care and precision."
    ],
    included: [
      ["Document Typing & Formatting", "Professional typing and formatting of business documents, proof-read and ready to send or present."],
      ["Electronic Mail-outs", "Preparing and distributing professional electronic communications to your contact list."],
      ["Data Entry", "Accurate and careful data entry across spreadsheets, databases, CRMs, and other systems."],
      ["Excel Spreadsheet Management", "Building and maintaining spreadsheets for stakeholder management, events tracking, and business use."],
      ["Data Cleaning", "Reviewing and tidying existing datasets so the information is accurate and usable."]
    ],
    audience: [
      "Businesses with documents that need professional polish",
      "Teams with spreadsheets that need structure and consistency",
      "Organisations with accurate data entry or data clean-up tasks",
      "Leaders who need fast, reliable administrative output"
    ],
    faqs: [
      ["What types of documents can you prepare?", "Cath works across correspondence, reports, briefs, proposals, agendas, meeting papers, and general business communications."],
      ["How quickly can you turn around document work?", "Turnaround depends on scope and complexity. Get in touch with details and Cath will confirm availability and a realistic timeline."],
      ["Do you offer proof-reading alongside formatting?", "Yes. Cath reviews documents for errors as a natural part of the preparation process."],
      ["Can you help with spreadsheets that have already been started?", "Absolutely. Cath can pick up an existing spreadsheet, review its structure, and improve it or continue working in it."]
    ]
  },
  {
    slug: "general-office-services",
    title: "General Office Services",
    shortTitle: "Office Services",
    h1: "General Office Services",
    subtitle: "An experienced, flexible pair of hands for whatever your business needs.",
    description:
      "Flexible, experienced administrative support for filing, accounts receivable, office process reviews, communications, and ad hoc admin.",
    image: "/images/sections/travel-accommodation.png",
    icon: "/images/icons/icon-headset.png",
    Icon: Headset,
    metaTitle: "General Office Services Melbourne",
    metaDescription:
      "Flexible, experienced administrative support for Melbourne businesses. Filing, accounts receivable, office process reviews, and ad hoc admin.",
    intro: [
      "Sometimes what a business needs doesn't fit neatly into a category.",
      "Whirlwind's general office services exist for the tasks accumulating in the background, the process no one has had time to review, or the correspondence that keeps getting pushed to next week.",
      "Cath brings over 45 years of broad administrative experience to her work, which means not much surprises her."
    ],
    included: [
      ["General Administrative Support", "Ad-hoc administrative tasks across the business, handled professionally and without fuss."],
      ["Electronic Communications", "Professional electronic mail-outs and general business communications ready to send when you need them."],
      ["Office Process Reviews", "A practical, experienced review of how your office administration currently runs."],
      ["Accounts Receivable Support", "Basic accounts receivable assistance, without general bookkeeping services."],
      ["Ad-hoc Office Tasks", "The miscellaneous tasks that don't belong anywhere else, handled with professionalism."]
    ],
    audience: [
      "Businesses with a varied pile of administrative tasks",
      "Teams needing short-term or part-time office support",
      "Owners who want processes reviewed by experienced eyes",
      "Organisations that need someone to get up to speed quickly"
    ],
    faqs: [
      ["What falls under general office services?", "General office services cover administrative tasks that don't fit neatly into executive assistance, event management, records management, or document preparation."],
      ["Do you offer one-off support or ongoing engagements?", "Both. Cath works across ongoing engagements, project-based work, and ad-hoc one-off assistance."],
      ["Is there anything you don't do?", "Whirlwind does not provide general bookkeeping services. For all other administrative tasks, get in touch and Cath will let you know whether it falls within scope."]
    ]
  }
];

export const trustPoints = [
  {
    title: "45 Years of Senior Executive Assistance",
    text: "Cath has supported ministers, commissioners, CEOs, and some of the top consulting firms in Melbourne.",
    Icon: ShieldCheck
  },
  {
    title: "A Real Person, Not an Agency",
    text: "Whirlwind is Cath Watkins. You work with the same senior professional every time.",
    Icon: Headset
  },
  {
    title: "Bayside & Melbourne CBD",
    text: "On-site support across Bayside and Melbourne businesses, with remote services available anywhere.",
    Icon: MapPin
  },
  {
    title: "Confidential, Proactive, and Reliable",
    text: "Senior executive work demands discretion and judgement. Cath brings both every single time.",
    Icon: ClipboardCheck
  }
];

export const globalFaqs = [
  ["What services does Whirlwind Secretarial Services offer?", "Whirlwind offers professional executive and administrative support services, including executive assistance, event management and co-ordination, records and database management, document preparation and data entry, and general office services."],
  ["Do you work on-site or remotely?", "Both. Cath works on-site at clients' premises across Melbourne CBD and Bayside Melbourne, approximately within a 10km radius of Brighton. She also works remotely for clients anywhere."],
  ["What areas do you service?", "Whirlwind's primary service area is Melbourne CBD and Bayside Melbourne, including Brighton, Hampton, Sandringham, Bentleigh, Elsternwick, St Kilda, and surrounding suburbs. Travel outside this area is available at an additional cost."],
  ["How much does Whirlwind charge?", "Pricing is based on the scope, complexity, and duration of the engagement. Daily rates, project-based pricing, and hourly rates are available depending on the nature of the work."],
  ["How do I get started? What's the process?", "The best first step is a conversation. Get in touch via the contact form on this website. If it looks like a good fit, Cath will put together a scope of work and quote for your review."],
  ["What industries do you work with?", "Cath has worked across government, private consulting, not-for-profit, and small-to-medium business. Her expertise is executive-level administration, which translates across sectors."],
  ["How do I pay?", "Invoices are issued via Xero. Payment is due on receipt of invoice unless alternative terms have been agreed in advance. Bank transfer is the preferred payment method."],
  ["What is your availability?", "Availability varies depending on current engagements. The best way to find out whether Cath is available is to get in touch and she will give you a straight answer about her capacity."],
  ["Do you offer ongoing support or one-off assistance?", "Both. Cath works across ongoing engagements, project-based work, and ad-hoc one-off assistance."],
  ["What makes Whirlwind different from a virtual assistant service?", "Virtual assistant services typically offer a pool of contractors who handle defined, repeatable tasks. Whirlwind is different because you work directly with Cath, a senior executive assistant with 45 years of judgement and experience."]
];

export const locationPages = [
  {
    slug: "brighton",
    title: "Executive Support Services Brighton",
    area: "Brighton",
    nearby: "Hampton, Elwood, Elsternwick, Sandringham, and the wider Bayside area",
    metaTitle: "Executive Support Services Brighton",
    metaDescription:
      "Local executive and administrative support in Brighton from Whirlwind Secretarial Services. On-site or remote support from Cath Watkins.",
    intro:
      "Whirlwind Secretarial Services is based in Brighton, making it especially practical for local businesses, clinics, consultants, community organisations, and professional offices that need senior support close by.",
    localFit:
      "For Brighton businesses, proximity matters. Cath can work on-site for time-sensitive admin, diary support, meetings, document preparation, event coordination, or records projects, while also handling ongoing work remotely when that is more efficient.",
    image: "/images/sections/melbourne-bayside.png"
  },
  {
    slug: "melbourne-cbd",
    title: "Executive Assistant Services Melbourne CBD",
    area: "Melbourne CBD",
    nearby: "Southbank, Docklands, South Melbourne, Port Melbourne, and inner Melbourne",
    metaTitle: "Executive Assistant Services Melbourne CBD",
    metaDescription:
      "Senior executive assistant and administrative support for Melbourne CBD businesses. On-site or remote support from Whirlwind Services.",
    intro:
      "Cath has spent decades supporting senior executives, government leaders, commissioners, CEOs, and consulting firms, making Whirlwind a strong fit for Melbourne CBD businesses that need calm, experienced administrative support.",
    localFit:
      "For city-based offices, Cath can step into executive assistance, meeting coordination, event support, minutes, travel planning, reporting, correspondence, and structured project administration without needing extensive hand-holding.",
    image: "/images/sections/meeting-room.png"
  },
  {
    slug: "hampton-sandringham",
    title: "Administrative Support Hampton & Sandringham",
    area: "Hampton & Sandringham",
    nearby: "Brighton, Black Rock, Beaumaris, Highett, and Bayside Melbourne",
    metaTitle: "Administrative Support Hampton & Sandringham",
    metaDescription:
      "Experienced administrative and executive support for Hampton and Sandringham businesses. On-site or remote services from Whirlwind.",
    intro:
      "Businesses in Hampton and Sandringham often need practical, flexible support without taking on a permanent hire. Whirlwind gives local teams access to Cath's senior administrative experience as needed.",
    localFit:
      "Cath can support local businesses with diary and email management, event coordination, records and database clean-up, document preparation, spreadsheet work, and general office tasks that need a reliable pair of hands.",
    image: "/images/sections/organised-workspace.png"
  },
  {
    slug: "st-kilda-elwood",
    title: "Executive & Admin Support St Kilda and Elwood",
    area: "St Kilda & Elwood",
    nearby: "Brighton, Elsternwick, Melbourne CBD, South Melbourne, and Bayside",
    metaTitle: "Executive & Admin Support St Kilda and Elwood",
    metaDescription:
      "Flexible executive and administrative support for St Kilda and Elwood businesses from Whirlwind Secretarial Services.",
    intro:
      "Whirlwind supports St Kilda and Elwood businesses that need experienced administrative help without the overhead of a full-time executive assistant or office manager.",
    localFit:
      "Whether the work is on-site, remote, or a mix of both, Cath can help with executive assistance, meeting and event logistics, documents, electronic communications, data clean-up, and ad-hoc office support.",
    image: "/images/sections/calendar-planning.png"
  },
  {
    slug: "bentleigh-elsternwick",
    title: "Administrative Support Bentleigh & Elsternwick",
    area: "Bentleigh & Elsternwick",
    nearby: "Bentleigh East, Carnegie, Caulfield, Ormond, Brighton, and Bayside",
    metaTitle: "Administrative Support Bentleigh & Elsternwick",
    metaDescription:
      "Senior administrative support for Bentleigh and Elsternwick businesses. Flexible executive, office, document, and records support.",
    intro:
      "Whirlwind provides experienced administrative support to Bentleigh and Elsternwick businesses that need structure, momentum, and confidentiality without adding permanent headcount.",
    localFit:
      "Cath can help with overflowing inboxes, complex calendars, reports, spreadsheets, event coordination, records management, data cleaning, office processes, and the varied administrative tasks that slow teams down.",
    image: "/images/sections/documents-data.png"
  }
];
