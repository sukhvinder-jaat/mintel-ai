import {
  AccurateTarget,
  AutoGenrate,
  AutoM,
  AutoMoney,
  DailyLost,
  DailySearch,
  DailyTarget,
  DataFocus,
  DataMachin,
} from "./Icon";
import pipeDrive from "../../assets/images/one-click/pipe.png";
import hubspot from "../../assets/images/one-click/hubSport.png";
import sfdc from "../../assets/images/one-click/sfdc.png";
import outreach from "../../assets/images/one-click/out-reach.png";
import sales from "../../assets/images/one-click/sales.png";
import monday from "../../assets/images/one-click/monday.png";
import brandW from "../../assets/images/brand/brand-w.png";
import cultividei from "../../assets/images/brand/cultivado.png";
import sos from "../../assets/images/brand/sos.png";
export const YouKnowCard = [
  {
    icon: <DailySearch />,
    description: "Daily, 2/8 hours are spent searching for decision makers.",
  },
  {
    icon: <DailyTarget />,
    description:
      "Over 90% report low accuracy in contact data, leading to missed opportunities.",
  },
  {
    icon: <DailyLost />,
    description: "Lost productivity costs $18,000 per salesperson annually.",
  },
];
// autoCard
export const autoCard = [
  {
    icon: <AutoM />,
    description:
      "Mintel.ai learns & understands your Ideal customer profile from your CRM, Website Visitors & Intent Sources",
  },
  {
    icon: <AutoGenrate />,
    description:
      "Generates list of contacts based on your ICP with the most accurate contact information.",
  },
  {
    icon: <AutoMoney />,
    description:
      "Provides minty fresh, qualified leads daily to your salespeople",
  },
];
// mintlizeCard
export const mintlizeCard = [
  {
    icon: <AccurateTarget />,
    heading: "Accurate Contact Data",
    para: "Don't miss out on potential buyers. Our waterfall enrichment allows you to tap into 15+ top data providers. ",
    whitePara: "If you can't find the contact info, no one can.",
  },
  {
    icon: <DataMachin />,
    heading: "Streamlined Lead Distribution",
    para: "Our smart lead routing system ensures leads are quickly and efficiently assigned to the right sales rep, ",
    whitePara: "fostering better team collaboration.",
  },
  {
    icon: <DataFocus />,
    heading: "Focus on Selling, Not Searching",
    para: "Redirect the time saved from manual prospecting towards engaging with prospects, nurturing leads, and ",
    whitePara: "closing deals for increased revenue.",
  },
];
// oneClickSponser
export const oneClickSponser = [
  {
    img: pipeDrive,
    title: "Pipedrive",
  },
  {
    img: hubspot,
    title: "Hubspot",
  },
  {
    img: sfdc,
    title: "SFDC",
  },
  {
    img: outreach,
    title: "Outreach",
  },
  {
    img: sales,
    title: "Salesloft",
  },
  {
    img: monday,
    title: "Monday",
  },
];
// brandCard
export const brandCard = [
  { img: brandW, width: "max-w-[105px]" },
  { img: cultividei, width: "max-w-[175px]" },
  { img: sos, width: "max-w-[118px]" },
];
