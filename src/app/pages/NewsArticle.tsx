import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Link2,
  ChevronRight,
  BookOpen,
  Mail,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { useState } from 'react';

const BLUE = '#1B4F8A';
const DARK_BLUE = '#0f2942';
const GREEN = '#2D5016';
const LIGHT_BG = '#F8FAFC';

/* ─── Articles ─────────────────────────────────────── */
const articles: Record<string, ArticleData> = {
  '1': {
    id: '1',
    tag: 'Announcement',
    tagColor: BLUE,
    date: 'February 14, 2025',
    readTime: '8 min read',
    author: {
      name: 'Dr. Laura Johnson',
      title: 'Director, NCWQR',
      avatar: '/images/people/dr-laura-johnson.JPG',
    },
    title: 'NCWQR Launches Monthly Updates Highlighting Research, Data, and Outreach Efforts',
    subtitle: 'Tracking water, research, and community impact from the 3rd floor of Gillmor Hall—celebrating a year of discoveries, collaborations, and milestones at the NCWQR.',
    heroImage: '/images/nature/2014-trees.jpg',
    heroCaption: 'image caption',
    body: [
      {
        type: 'paragraph',
        content:
          'This is the start of a new series on the going-ons at the NCWQR!  I hope to publish these posts monthly throughout the year to give everyone a view of what we’re up to on the 3rd floor of Gillmor Hall.',
      },
      {
        type: 'paragraph',
        content: (
                <>
                    To start things off, let's discuss last year! In 2019, our chemistry lab analyzed over 11,000 water samples for nutrients and/or sediment most of which were for the Heidelberg Tributary Loading Program {' '}
                    <Link to="/publications" style={{ color: BLUE, textDecoration: 'underline' }}>
                        (HLTP)
                    </Link>
                    {' '} and were collected from 25 different locations throughout Ohio and one in Michigan. Our researchers published 7 peer-reviewed articles{' '}
                    <Link to="/monitoring" style={{ color: BLUE, textDecoration: 'underline' }}>
                        you can find them here
                    </Link>
                    {'; '}managed 8 different grants aside from the HTLP; presented at the International Society for Great Lakes Research, the Society for Freshwater Sciences, the Soil and Water Conservation Society, the Ecological Society of America, and the American Geophysical Union conferences; and gave over 20 presentations to various groups throughout the community. At the same time, we continued to analyze samples for private well owners, assisted in expanding the Sandusky River Watershed Coalition, and mentored students both as interns and in the classroom. To wrap up 2019, we were informed that 4 grant proposals were selected for funding, ranging in topics from antibiotics in rivers to using field-scale models to help develop water quality trading markets.
                </>
      ),
      },
      {
        type: 'paragraph',
        content: (
                <>
                    One of the biggest events in 2019 was the celebration of our 50th Anniversary in October.  We had a 2-day workshop which culminated in an anniversary dinner.  Most exciting, the history of the NCWQR, which was written by Dr. Ken Baker, is now available online {' '}
                    <Link to="https://ncwqr.org/wp-content/uploads/2020/02/ncwqr-history-by-ken-baker-2019-updated.pdf" style={{ color: BLUE, textDecoration: 'underline' }}>
                        here!
                    </Link>
                </>
      ),
      },
      {
        type: 'paragraph',
        content:
          'This year is off to an active start!  Heidelberg\’s Biology and Environmental Sciences department is in the middle of a search for a new assistant professor of ecology, which has given us the opportunity to see multiple teaching demonstrations and provide feedback.  We\’ve attended meetings for a multitude of advisory groups including revising the NRCS 590 standard and planning water quality sampling for the Ohio DNR H2Ohio projects.  Rem has been involved in a collaborative effort linking phosphorus models from soils to the world, Laura attended a workshop on linking soil and watershed health to drainage practices, and both Laura and Nate have been involved in discussions on developing a pilot watershed.',
      },
      {
        type: 'paragraph',
        content:
          'On top of all that, January has been rather warm and rainy with 4 different high flow events about perfectly timed by each week leading to high samples loads for the lab with especially muddy samples (which take longer to filter).',
      },
      {
        type: 'paragraph',
        content: (
                <>
                    Moving forward, we’ll be completing our spring and annual loading calculations, finishing up a number of different papers and reports that are in progress, giving a few presentations, and are looking forward to the {' '}
                    <Link to="https://www.facebook.com/SanduskyRiverWatershedCoalition/photos/a.402820289765903/2696379333743309/?type=3&theater" style={{ color: BLUE, textDecoration: 'underline' }}>
                    February SRWC Brews and News featuring Ray Grob who will review the history of the Sandusky River!
                    </Link>
                </>
      ),
      },
      {
        type: 'paragraph',
        content: '…and as always, sample on!'
      },
    ],
    relatedIds: ['4', '3', '2'],
  },
    '2': {
    id: '2',
    tag: 'Announcement',
    tagColor: BLUE,
    date: 'April 20, 2020',
    readTime: '5 min read',
    author: {
        name: 'Dr. Laura Johnson',
        title: 'Director, NCWQR',
        avatar: '/images/people/dr-laura-johnson.JPG',
    },
    title: 'Adjusting to COVID-19: NCWQR\'s Response and Continued Commitment to Research',
    subtitle: 'Weather, research, and resilience in unprecedented times—keeping the NCWQR running through storms, blooms, and a rapidly changing world.',
    heroImage: '/images/nature/bush-RC.jpg',
    heroCaption: 'image caption',
    body: [
        {
            type: 'paragraph',
            content:
            'What weird times we’re living in right now! I can say, up until this week, 2020 has been an especially busy year.  We’ve had at least 6 storm events in the past 6 weeks, which has kept the lab very busy with lots of muddy samples.  As of March 1st we officially entered the spring loading season for the Lake Erie bloom forecast, so it can stop raining any day now!',
        },
        {
            type: 'image',
            url: '/image/lab/storm-event-station.webp',
            caption:
            'Before and during a storm event from a station last week',
            size: 'medium'
        },
        {
            type: 'paragraph',
            content: (
                    <>
                        Since the last update, I\’ve been to the University of Nebraska in Lincoln to give a seminar and meet with our collaborators at the Water Science Laboratory {' '}
                        <Link to="https://youtu.be/drJB0klhMEQ" style={{ color: BLUE, textDecoration: 'underline' }}>
                            (watch here)
                        </Link>
                        {' '} Nate gave a talk at the Great Lakes Symposium at the Toledo Zoo for an audience of a couple hundred middle and high school students from multiple Toledo-area schools. We also went to the {' '}
                        <Link to="https://fabe.osu.edu/CTCon" style={{ color: BLUE, textDecoration: 'underline' }}>
                            (watch here)
                        </Link>
                        {' '} in Ada in early March for a talk on the 2019 results and heard lots of updates from the edge-of-field research and other agroecosystem research. I\’m also happy to report that the 2019 loads are complete for each of our stations.  It took a bit longer this year, in part because of the record-high number of stations we are running!  Monitoring 23 stations is a big task and we\’ve been doing a great job of providing high-quality data for each of these.
                    </>
        ),
        },
        {
            type: 'image',
            url: '/image/lab/autoBeale-image.jpeg',
            caption:
            'Screenshot of the autoBeale program for loads',
            size: 'medium'
        },
        {
            type: 'paragraph',
            content: 'The Sandusky River Watershed Coalition had a great News and Brews event in February featuring Ray Grob to chat about his experiences on the Sandusky River.  In addition, supplies to start stenciling storm drains have been acquired and are available for people who need volunteer activities.  These were tested a couple weekends ago around Tiffin.',
        },
        {
            type: 'imagegrid',
            images: [
                { url: '/images/nature/erie-here-grass.jpg'},
                { url: '/images/nature/erie-here-grate.jpg'},
                { url: '/images/nature/erie-here-paint.jpg'},
            ],
        },
        {
            type: 'paragraph',
            content: 'A big congratulations to our post-doc, Tian Guo, for starting a new position with the National Soil Erosion Research Laboratory and Department of Agricultural & Biological Engineering at Purdue University last week.  She will be missed, but luckily in our line of work, we can continue to collaborate!'
        },
        {
            type: 'paragraph',
            content: (
                    <>
                        And now for the updates regarding COVID-19 and the Ohio Stay-at-Home order… You may have heard the news that the {' '}
                        <Link to="https://inside.heidelberg.edu/departments-offices/health-center/covid-19-novel-coronavirus" style={{ color: BLUE, textDecoration: 'underline' }}>
                            Heidelberg campus will be closed after Sunday for the rest of the semester and that all classes have moved online.
                        </Link>
                        {' '} Aaron and Rem will have their hands full transitioning existing content into this new platform!  For the lab, we are suspending sampling at stations where the samples have to be shipped (Raisin, Cuyahoga, Great Miami, Scioto, and Muskingum) and reducing sampling frequency at the remaining stations to once per day starting on Monday, March 23.  This should get us ~2-3 weeks of sampling before we’d need new bottles. We are in the Maumee loading season for predicting bloom severity, and thus will prioritize Maumee sampling as we are able.   Though the order only lasts for two weeks, who knows what will happen as we move forward.  We will be making decisions that prioritize the health of everyone at the NCWQR first, and then we’ll be sampling as much as we can second!
                    </>
        ),
        },
        {
            type: 'paragraph',
            content: 'Until then, sample on!'
        },
    ],
    relatedIds: ['4', '3', '1'],
  },
    '3': {
    id: '3',
    tag: 'Announcement',
    tagColor: BLUE,
    date: 'October 1, 2020',
    readTime: '4 min read',
    author: {
        name: 'Dr. Laura Johnson',
        title: 'Director, NCWQR',
        avatar: '/images/people/dr-laura-johnson.JPG',
    },
    title: 'Happy New Year from NCWQR! Welcome to our 2020 Student Research Interns',
    subtitle: 'A changing of the guard at NCWQR—honoring longtime staff while welcoming a new generation of field and lab scientists.',
    heroImage: '/images/nature/RC-muddy-low.JPG',
    heroCaption: 'image caption',
    body: [
        {
          type: 'subheading',
          content: 'Happy New Year!'
        },
        {
            type: 'paragraph',
            content:
            'This year brings a lot of changes for the NCWQR.  Ellen and Barb, our two longest term employees retired at the end of August.  Their talent and dedication to the NCWQR is what made us one of the best water quality labs around!  We already miss them both greatly but know that they are enjoying not having to panic during every storm.',
        },
        {
          type: 'imagescroller',
          images: [
            { url: '/images/people/sunglasses-lab.jpg'},
            { url: '/images/people/ellen-immunoassay.jpg'},
            { url: '/images/people/lab-watch.jpg'},
            { url: '/images/people/bard-filtering-samples.jpg'},
          ],
          caption: 'Slideshow of Ellen and Barm from then to now'
        },
        {
            type: 'paragraph',
            content: 'With that, I\’d like to introduce our three new field & lab technicians!  Taylor Fulton joined us in mid-August, Emily Clark at the beginning of September, and Kevin Jones in mid-September. ',
        },
        {
          type: 'paragraph',
          content: 'Taylor recently graduated from Kent State University with a BS in Environmental Conservation Biology and worked as an undergraduate researcher in a soil ecology lab and an ecotoxicology & biogeochemistry lab.  '
        },
        {
          type: 'paragraph',
          content: 'Emily is also a recent graduate, but from Bowling Green State University with a B.S. in Environmental Science.  As an undergraduate she worked in a water chemistry lab and did an REU at U of Toledo on respiration rates of artic soils.  '
        },
        {
          type: 'paragraph',
          content: 'Kevin returned to Ohio to join the lab after a couple years of water monitoring in Florida at Sanibel-Captiva Conservation Foundation.  Prior to that he worked for a couple of summers in the water chemistry lab at OSU Stone Lab and was a fish observer in Alaska. He graduated from the University of Alabama with a B.S. in Chemistry and Marine Science.'
        },
        {
          type: 'paragraph',
          content: 'All three have experiences that are a great fit for the NCWQR and we\’re so happy they all decided to join our team! '
        },
        {
            type: 'imagegrid',
            images: [
                { url: '/images/people/taylor-emily-filters-2010.jpg', caption: 'Taylor and Emily weighing filters (L to R)' },
                { url: '/images/people/kevin-chromatograph.jpg', caption: 'Kevin on the ion chromatograph' },
            ],
        },
        {
            type: 'paragraph',
            content: 'And so, our new year\'s resolution will be the same as every year...sample on!'
        },
    ],
    relatedIds: ['4', '2', '1'],
  },
    '4': {
    id: '4',
    tag: 'Announcement',
    tagColor: BLUE,
    date: 'April 26, 2021',
    readTime: '10 min read',
    author: {
        name: 'Dr. Laura Johnson',
        title: 'Director, NCWQR',
        avatar: '/images/people/dr-laura-johnson.JPG',
    },
    title: 'A Farewell to our Founder, Dr. David Baker',
    subtitle: 'Remembering the legacy of NCWQR founder Dr. David Baker—whose vision, curiosity, and commitment to data continue to guide the lab’s work today.',
    heroImage: '/images/people/baker-respirometer.jpg',
    heroCaption: 'image caption',
    body: [
        {
            type: 'paragraph',
            content: (
                    <>
                        The NCWQR had to say goodbye to our founder, Dr. David Baker, on Saturday.  His accomplishments have been well summarized already {' '}
                        <Link to="https://www.hgmackfuneralhome.com/obituaries/david-baker" style={{ color: BLUE, textDecoration: 'underline' }}>
                            here
                        </Link>
                        {' '}, and {' '}
                        <Link to="https://inside.heidelberg.edu/news/041921/campus-mourns-passing-dr-david-baker" style={{ color: BLUE, textDecoration: 'underline' }}>
                            here
                        </Link>
                        {' '}, and {' '}
                        <Link to="https://www.toledoblade.com/local/environment/2021/04/20/toledo-obituaries-david-bruce-baker-heidelberg-university-renowned-water-quality-expert/stories/20210419122" style={{ color: BLUE, textDecoration: 'underline' }}>
                            here
                        </Link>
                        {' '}, and {' '}
                        <Link to="https://www.toledoblade.com/opinion/columnists/2021/04/25/commentary-heidelberg-university-david-baker-will-have-lasting-impact-lake-erie/stories/20210424002" style={{ color: BLUE, textDecoration: 'underline' }}>
                            here
                        </Link>
                        {' '}. Furthermore, {' '}
                        <Link to="/documents/ncwqr-history-by-ken-baker-2019-updated.pdf" style={{ color: BLUE, textDecoration: 'underline' }}>
                            a 255 page history of the lab was graciously written by Dr. Ken Baker in 2019
                        </Link>
                        {' '} to help celebrate the lab’s 50th anniversary.  As written to his family on Saturday, {' '}
                        <strong>
                            Dave Baker will forever be missed, but is also our constant inspiration to do more and always ask “I wonder if…” As long as the NCWQR continues to exist, so does the spirit of Dave Baker.
                        </strong>
                    </>
        ),
        },
        {
            type: 'paragraph',
            content: 'In this post, I would like to expand on this sentiment and reflect on how Dave has affected my life and will continue to do so. I joined the NCWQR 8 years ago as a research scientist to help Dave complete a few on-going projects that he started in the mid 2000s to better understand why dissolved phosphorus increased in the western Lake Erie tributaries and how to reduce those levels.  It should be noted that these projects were started after Dave\’s first retirement, and overlapped with his term as an interim director. Compared to most people in the lab, I\’ve known Dave for a fairly short amount of time, however, I was able to interact with him closely on these projects and was lucky to see his thinking towards science and data.  '
        },
        {
            type: 'paragraph',
            content: 'Dave toed the line between being remarkably humble (he would be the first to say he didn\’t have a degree in a field of water science and he didn\’t have a strong statistical background) with being stalwart about the findings in the data and brave to show those data in sticky situations.  He was able to analyze vast quantities of data in ways that were equally simple and yet ingenious.  He was so familiar with these datasets that if other people analyzed lab data in a paper or presentation, he could tell immediately if they did something wrong without even having to look anything up.  In fact, we are all a little worse off than we were before without having Dave around to apply his creative thinking to the world of water.  I, for one, will miss having the opportunity to hear his thoughts on new papers or proposals, reports and guidelines to improve water quality, and his brainstorming on the next thing we should be studying.'
        },
        {
            type: 'paragraph',
            content: 'It\’s a unique type of grief I think, being in the position I\’m in. I\’ve essentially inherited Dave\’s Water Quality Lab and while the team we have working in the lab currently along with our past director, Ken Krieger, are a wonderful support system, it somehow feels a bit more lonely without Dave. Furthermore, I am no Dave Baker.  I share his enthusiasm for our work, but I don\’t have his way of thinking, I have my own.  The NCWQR these days is a little bit different than in past years.  Much of the team that had been around for many years have retired since I joined the lab in 2013- Pete, Ken, Jack, Dave, Ellen, and Barb, and most recently, Rem started a new position with NIBIO in Norway. But when you think about the fundamentals of what we are doing to this day- how we collect samples, what we measure, and at what frequency- these are the same projects that Dave envisioned and Jack actualized in the early 1970s.'
        },
        {
            type: 'paragraph',
            content: (
                    <>
                        Because of Dave and Pete’s tireless work promoting the lab and communicating our results, there is a high appreciation for our work in the region. Our data are being used to {' '}
                        <Link to="https://inside.heidelberg.edu/departments-offices/health-center/covid-19-novel-coronavirus" style={{ color: BLUE, textDecoration: 'underline' }}>
                            assess progress towards reducing phosphorus entering Lake Erie, forecast bloom severity in the western Lake Erie basin, examine the effectiveness of the H2Ohio agricultural and wetland practices being implemented under Governor DeWine, model the needed practices and coverage to improve water quality in the region, determine how much nitrogen and phosphorus comes from different sources in each of the major watersheds in Ohio
                        </Link>
                        {' '}, and to develop tools that best estimate loadings when data aren’t as plentiful as they are from the NCWQR.  And I’m certainly missing something in this list.  Because of these activities and our broad network of colleagues, our funding has been ample since I’ve been director and we are currently at the cusp of 2 new, potentially decade-long projects.  I’m pleased to say that it doesn’t appear that activities at the NCWQR will be slowing anytime soon.  Hence, the spirit of Dave Baker, his original ideas on how to monitor watersheds and communicate those results, lives on through each of us at the NCWQR and we intend to sample on!  
                    </>
        ),
        },
    ],
    relatedIds: ['3', '2', '1'],
  },
    '5': {
    id: '5',
    tag: 'Annual Report',
    tagColor: '#B45309',
    date: 'December 15, 2021',
    readTime: '2 min read',
    author: {
        name: 'Dr. Laura Johnson',
        title: 'Director, NCWQR',
        avatar: '/images/people/dr-laura-johnson.JPG',
    },
    title: 'The Annual Report for 2021 is now avaliable!',
    subtitle: 'Closing out 2021 with a look back at a productive year and a preview of the projects ahead for the NCWQR.',
    heroImage: '/images/nature/winter-water.jpg',
    heroCaption: 'image caption',
    body: [
        {
            type: 'paragraph',
            content: 'As we end 2021 and enter 2022, I’d like to share some lab updates… this time in the form of a short annual report!  As you’ll see in the report, we’ve had a productive year and are looking forward to some new projects picking up steam over the next year.  Our team has changed some over the past 2 years but we’re now a well-oiled machine and I’m thankful every day to have such great folks at the NCWQR.'
        },
        {
            type: 'paragraph',
            content: (
                    <>
                        <Link to="/documents/ncwqr-annual-report-2021.pdf" style={{ color: BLUE, textDecoration: 'underline' }}>
                            NCWQR Annual Report 2021
                        </Link>
                      
                    </>
        ),
        },
        {
            type: 'paragraph',
            content: 'And now with 2022 on the horizon, let\'s sample on!'
        },
    ],
    relatedIds: ['6', '4', '3'],
  },
    '6': {
    id: '6',
    tag: 'Annual Report',
    tagColor: '#B45309',
    date: 'March 16, 2023',
    readTime: '3 min read',
    author: {
        name: 'Dr. Laura Johnson',
        title: 'Director, NCWQR',
        avatar: '/images/people/dr-laura-johnson.JPG',
    },
    title: 'The Annual Report for 2022 is now avaliable!',
    subtitle: 'Highlights from the NCWQR’s 2022 annual report, including new team members, ongoing monitoring programs, and preparations for the upcoming Lake Erie bloom forecast season.',
    heroImage: '/images/nature/rock-creek-low.JPG',
    heroCaption: 'image caption',
    body: [
        {
            type: 'paragraph',
            content: 'The 2022 annual report is now available! We’ve had another productive year that ended with a number of publications coming online around the same time. We added a new team member, James, who is sampling our wetlands as part of the H2Ohio Wetlands Monitoring Program. In the coming year, we continue to grow and anticipate adding a postdoctoral research associate and a new research technician to our team. At this time, we’re in the middle of finishing up quality control and assessment on the 2022 HTLP data and calculating nutrient loads. That being said, the 2023 loading season for HABs in the western Lake Erie basin has also officially started (early season projections will start in May and the seasonal forecast is planned for June 29). Our plan for the remainder of 2023 is the same as every year, and that’s to sample on! '
        },
        {
            type: 'paragraph',
            content: (
                    <>
                        <Link to="/documents/ncwqr-annual-report-2022.pdf" style={{ color: BLUE, textDecoration: 'underline' }}>
                            NCWQR Annual Report 2022
                        </Link>
                      
                    </>
        ),
        },
    ],
    relatedIds: ['5', '4', '3'],
  },
    '7': {
    id: '7',
    tag: 'Event',
    tagColor: GREEN,
    date: 'February 6, 2025',
    readTime: '5 min read',
    author: {
        name: 'Dr. Laura Johnson',
        title: 'Director, NCWQR',
        avatar: '/images/people/dr-laura-johnson.JPG',
    },
    title: 'Summer Camp Opportunity: Water Detectives - Rivers and Wetlands',
    subtitle: 'A hands-on workshop where participants investigate stream and wetland health using real water quality monitoring tools and data analysis.',
    heroImage: '/images/lab/gillmore-2014.jpg',
    heroCaption: 'image caption',
    body: [
        {
          type: 'subheading',
          content: '2025 Summer Camp: Water Detectives - Rivers and Wetlands'
        },
        {
            type: 'paragraph',
            content: 'Led by researchers from the National Center for Water Quality Research, attendees will become water detectives to determine the health of local streams and wetlands. In the field, hands-on training with specialized water quality equipment will help attendees learn how to assess the physical, chemical, and biological components of streams and wetlands. After collecting their own data, attendees will learn how to analyze the data they collected to determine the health of the water. Lastly, they will learn how their findings can be used to guide decision making and policy decisions on real-life water quality issues threatening our freshwater systems.'
        },
        {
            type: 'image',
            url: '/images/summer-camps-poster',
            size: 'large'
        },
    ],
    relatedIds: ['6', '5', '4'],
  },  
};

/* Related article stubs */
const relatedArticles: Record<string, RelatedArticle> = {
  '7':   {
    id: '7',
    date: 'February 6, 2025',
    title: 'Summer Camp Opportunity: Water Detectives - Rivers and Wetlands',
    image: '/images/lab/gillmore-2014.jpg',
    tag: 'Event',
    tagColor: GREEN,
  },
  '6':{
    id: '6',
    date: 'March 16, 2023',
    title: 'The Annual Report for 2022 is now available!',
    image: '/images/nature/rock-creek-low.JPG',
    tag: 'Annual Report',
    tagColor: '#B45309',
  },
  '5':{
    id: '5',
    date: 'December 15, 2021',
    title: 'The Annual Report for 2021 is now available!',
    image: '/images/winter-water.jpg',
    tag: 'Annual Report',
    tagColor: '#B45309',
  },
  '4': {
    id: '4',
    date: 'April 26, 2021',
    title: 'Farewell to our Founder, Dr. David Baker',
    image: '/images/people/baker-respirometer.jpg',
    tag: 'Announcement',
    tagColor: BLUE,
  },
  '3': {
    id: '3',
    date: 'October 1, 2020',
    title: 'Happy New Year from NCWQR! Welcome to our 2020 Student Research Interns',
    image: '/images/nature/RC-muddy-low.JPG',
    tag: 'Announcement',
    tagColor: BLUE,
  },
  '2': {
    id: '2',
    date: 'March 20, 2020',
    title: 'Adjusting to COVID-19: NCWQR\'s Response and Continued Commitment to Research',
    image: '/images/nature/bush-RC.jpg',
    tag: 'Announcement',
    tagColor: BLUE,
  },
  '1': {
    id: '1',
    date: 'February 1, 2020',
    title: 'NCWQR Launches Monthly Updates Highlighting Research, Data, and Outreach Efforts',
    image: '/images/nature/2014-trees.jpg',
    tag: 'Announcement',
    tagColor: BLUE,
  },
};

/* ─── Types ─────────────────────────────────────────────────── */
interface AuthorData {
  name: string;
  title: string;
  avatar: string;
}
/* Image scroller settings and cycle through arrows + dots */
function ImageScroller({ images }: { images: { url: string; caption?: string }[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative my-8 rounded-2xl overflow-hidden shadow-md">
      {/* Image */}
      <img
        src={images[current].url}
        alt={images[current].caption || ''}
        className="w-full h-auto rounded-xl shadow-sm"
        style={{ height: '480px' }}
      />

      {/* Caption */}
      {images[current].caption && (
        <div
          className="absolute bottom-12 left-0 right-0 text-center text-sm text-white px-4"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
        >
          {images[current].caption}
        </div>
      )}

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        style={{ backgroundColor: 'rgba(0,0,0,0.45)', color: '#fff' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.45)')}
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        style={{ backgroundColor: 'rgba(0,0,0,0.45)', color: '#fff' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.45)')}
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{
              backgroundColor: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
              transform: i === current ? 'scale(1.2)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface BodyBlock {
  type: 'paragraph' | 'heading' | 'pullquote' | 'image' | 'databox' | 'imagegrid' | 'subheading' | 'imagescroller';
  content?: string | React.ReactNode;
  attribution?: string;
  url?: string;
  caption?: string;
  label?: string;
  stats?: { value: string; description: string }[];
  images?: { url: string; caption?: string }[];
  size?: 'small' | 'medium' | 'large';
}

interface ArticleData {
  id: string;
  tag: string;
  tagColor: string;
  date: string;
  readTime: string;
  author: AuthorData;
  title: string;
  subtitle: string;
  heroImage: string;
  heroCaption: string;
  body: BodyBlock[];
  relatedIds: string[];
}

interface RelatedArticle {
  id: string;
  tag: string;
  tagColor: string;
  date: string;
  title: string;
  image: string;
}

/* ─── Sub-components ─────────────────────────────────────────── */

function BodyBlock({ block }: { block: BodyBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          className="text-gray-700 leading-relaxed mb-6"
          style={{ fontSize: '1.05rem' }}
        >
          {block.content}
        </p>
      );

    case 'heading':
      return (
        <h2
          className="mt-10 mb-4"
          style={{ fontSize: '1.35rem', fontWeight: 700, color: DARK_BLUE, lineHeight: 1.3 }}
        >
          {block.content}
        </h2>
      );

    case 'pullquote':
      return (
        <blockquote
          className="my-10 pl-6 pr-4 py-5 rounded-r-2xl border-l-4"
          style={{ borderLeftColor: BLUE, backgroundColor: '#EEF4FB' }}
        >
          <Quote className="w-7 h-7 mb-3" style={{ color: BLUE, opacity: 0.5 }} />
          <p
            className="text-gray-800 leading-relaxed mb-3 italic"
            style={{ fontSize: '1.1rem' }}
          >
            {block.content}
          </p>
          {block.attribution && (
            <p className="text-sm font-semibold" style={{ color: BLUE }}>
              {block.attribution}
            </p>
          )}
        </blockquote>
      );

    case 'image':
      const heightMap = {
        small: '250px',
        medium: 'auto',
        large: 'auto',
      };

      const maxHeightMap = {
        small: '250px',
        medium: '500px',
        large: 'none',
      };

      const imageSize = block.size ?? 'medium';
      return (
        <figure className="my-10">
          <img
            src={block.url}
            alt={block.caption || ''}
            className="rounded-2xl shadow-md"
            style={{
              height: heightMap[imageSize],
              maxHeight: maxHeightMap[imageSize],
              width: 'auto',
              maxWidth: '100%',
              display: 'block',
              margin: '0 auto',
            }}
          />
          {block.caption && (
            <figcaption className="mt-3 text-sm text-gray-500 text-center italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case 'databox':
      return (
        <div
          className="my-10 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          style={{ backgroundColor: '#fff' }}
        >
          <div
            className="px-6 py-3 flex items-center gap-2"
            style={{ backgroundColor: DARK_BLUE }}
          >
            <BookOpen className="w-4 h-4 text-blue-200" />
            <span className="text-sm font-semibold text-white uppercase tracking-widest">
              {block.label}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {block.stats?.map((stat, i) => (
              <div key={i} className="px-6 py-5 text-center">
                <div
                  className="mb-1"
                  style={{ fontSize: '2rem', fontWeight: 800, color: BLUE, lineHeight: 1.1 }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 leading-snug">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      );
      case 'imagegrid':
          return (
            <div 
              className="grid gap-4 my-8"
              style={{ gridTemplateColumns: `repeat(${block.images?.length || 1}, 1fr)` }}
            >
              {block.images?.map((img: { url: string; caption?: string }, i: number) => (
                <figure key={i}>
                  <img
                    src={img.url}
                    alt={img.caption || ''}
                    className="w-full h-48 object-cover rounded-xl shadow-sm"
                  />
                  {img.caption && (
                    <figcaption className="mt-2 text-xs text-gray-400 text-center italic">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
        );
      case 'subheading':
        return (
          <h3
            className="mt-8 mb-4 text-center"
            style={{ fontSize: '1.2rem', fontWeight: 700, color: BLUE, lineHeight: 1.3 }}
          >
            {block.content}
          </h3>
      );
      case 'imagescroller':
        return <ImageScroller images={block.images || []} />;
          default:
            return null;
        }
}

function ShareButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    onClick();
    if (label === 'Copy link') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all border"
      style={{ borderColor: '#e2e8f0', color: '#374151' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = BLUE;
        (e.currentTarget as HTMLButtonElement).style.color = 'white';
        (e.currentTarget as HTMLButtonElement).style.borderColor = BLUE;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = '';
        (e.currentTarget as HTMLButtonElement).style.color = '#374151';
        (e.currentTarget as HTMLButtonElement).style.borderColor = '#e2e8f0';
      }}
    >
      <Icon className="w-4 h-4" />
      {copied ? 'Copied!' : label}
    </button>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */

export function NewsArticle() {
  const { id = '1' } = useParams<{ id: string }>();
  const [emailVal, setEmailVal] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Fall back to article id=1 if the requested one isn't in our mock data
  const article = articles[id] ?? articles['1'];
  const related = article.relatedIds
    .map((rid) => relatedArticles[rid])
    .filter(Boolean);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url).catch(() => {});
    }
  };

  return (
    <div style={{ backgroundColor: LIGHT_BG, minHeight: '100vh' }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative" style={{ minHeight: '520px' }}>
        <img
          src={article.heroImage}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,41,66,0.4) 0%, rgba(15,41,66,0.85) 70%, rgba(15,41,66,0.98) 100%)',
          }}
        />
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: BLUE }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link
              to="/news"
              className="flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              News & Updates
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-sm text-blue-300 truncate max-w-xs">{article.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            {/* Tag */}
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-white mb-5"
              style={{ backgroundColor: article.tagColor }}
            >
              {article.tag}
            </span>

            {/* Title */}
            <h1
              className="text-white mb-5"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15 }}
            >
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-blue-100 leading-relaxed mb-8" style={{ fontSize: '1.1rem' }}>
              {article.subtitle}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-blue-200">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author.name}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            <article>
              {/* Hero image caption */}
              {article.heroCaption && (
                <p className="text-sm text-gray-400 italic mb-8 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  {article.heroCaption}
                </p>
              )}

              {/* Body blocks */}
              <div>
                {article.body.map((block, i) => (
                  <BodyBlock key={i} block={block} />
                ))}
              </div>

              {/* Bottom share bar */}
              <div
                className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                    <Share2 className="w-4 h-4" /> Share this article
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <ShareButton icon={Twitter} label="Twitter" onClick={() => handleShare('twitter')} />
                    <ShareButton icon={Linkedin} label="LinkedIn" onClick={() => handleShare('linkedin')} />
                    <ShareButton icon={Link2} label="Copy link" onClick={() => handleShare('copy')} />
                  </div>
                </div>
                <Link
                  to="/news"
                  className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: BLUE }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all news
                </Link>
              </div>
            </article>
          </motion.main>

          {/* ── Sidebar ────────────────────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-80 flex-shrink-0 space-y-7"
          >
            {/* Author card */}
            <div
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#9CA3AF' }}
              >
                Author
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-14 h-14 rounded-full object-cover border-2"
                  style={{ borderColor: BLUE }}
                />
                <div>
                  <p className="font-semibold text-sm" style={{ color: DARK_BLUE }}>
                    {article.author.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{article.author.title}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mt-4">
                Dr. Laura Johnson directed the NCWQR, leading research on nutrients, harmful algal blooms, and agricultural watershed impacts while expanding monitoring programs and collaborating on Great Lakes water quality studies.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold mt-4 transition-colors"
                style={{ color: BLUE }}
              >
                Meet our team <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#9CA3AF' }}
              >
                Share
              </h3>
              <div className="flex flex-col gap-2">
                <ShareButton icon={Twitter} label="Share on Twitter" onClick={() => handleShare('twitter')} />
                <ShareButton icon={Linkedin} label="Share on LinkedIn" onClick={() => handleShare('linkedin')} />
                <ShareButton icon={Link2} label="Copy link" onClick={() => handleShare('copy')} />
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#9CA3AF' }}
              >
                Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Great Lakes',
                  'Partnerships',
                  'Climate Change',
                  'Carbon Cycling',
                  'Monitoring',
                  'DOE',
                  'Coastal Science',
                  'HTLP',
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border cursor-pointer transition-all"
                    style={{ borderColor: '#e2e8f0', color: '#374151' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.backgroundColor = BLUE;
                      (e.currentTarget as HTMLSpanElement).style.color = 'white';
                      (e.currentTarget as HTMLSpanElement).style.borderColor = BLUE;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.backgroundColor = '';
                      (e.currentTarget as HTMLSpanElement).style.color = '#374151';
                      (e.currentTarget as HTMLSpanElement).style.borderColor = '#e2e8f0';
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div
              className="rounded-2xl p-6 text-white overflow-hidden relative"
              style={{ backgroundColor: DARK_BLUE }}
            >
              {/* Decorative ring */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: BLUE }}
              />
              <Mail className="w-6 h-6 text-blue-300 mb-3 relative z-10" />
              <h3 className="font-semibold text-white mb-2 relative z-10" style={{ fontSize: '1rem' }}>
                Stay Informed
              </h3>
              <p className="text-xs text-blue-200 leading-relaxed mb-4 relative z-10">
                Get new research findings, data releases, and partnership announcements directly to your inbox.
              </p>
              {subscribed ? (
                <div className="relative z-10 text-sm text-green-300 font-medium flex items-center gap-2">
                  ✓ You're subscribed — thank you!
                </div>
              ) : (
                <form
                  className="relative z-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (emailVal.trim()) setSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    value={emailVal}
                    onChange={(e) => setEmailVal(e.target.value)}
                    placeholder="your@email.edu"
                    className="w-full px-3 py-2 rounded-lg text-sm text-gray-800 mb-2 outline-none bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg text-sm font-semibold text-white transition-colors"
                    style={{ backgroundColor: BLUE }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#163f6e';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = BLUE;
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Data Portal CTA */}
            <div
              className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: '#EEF4FB' }}
              >
                <BookOpen className="w-5 h-5" style={{ color: BLUE }} />
              </div>
              <h3 className="font-semibold mb-1" style={{ fontSize: '0.95rem', color: DARK_BLUE }}>
                Explore the Data
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Access 50+ years of Great Lakes tributary water quality data through the HTLP Data Portal.
              </p>
              <a
                href="https://ncwqr-data.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-lg transition-colors"
                style={{ backgroundColor: BLUE }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#163f6e';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                }}
              >
                Open Data Portal <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* ── Related Articles ──────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold" style={{ fontSize: '1.4rem', color: DARK_BLUE }}>
                Related Stories
              </h2>
              <Link
                to="/news"
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: BLUE }}
              >
                All news <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to={`/news/${item.id}`}
                    className="block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span
                        className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: item.tagColor }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </div>
                      <h3
                        className="leading-snug group-hover:underline decoration-dotted underline-offset-2"
                        style={{ fontSize: '0.95rem', fontWeight: 700, color: DARK_BLUE }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}