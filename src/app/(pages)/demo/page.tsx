import {LinearAds} from "@/components/ads";
import {
    Banner,
    MainPosts,
    PostsSec,
    SingleCardSec,
    SliderSec,
    SportSec, TeletypeSec,
    VerticalPostsSec,
} from "@/components/organisms";
import MostTab from "@/components/organisms/sections/MostTab";
import SiteConfig from "@/config/site";
import {Metadata} from "next";
import React from "react";
import ServicesNav from "./components/ServicesNav";
import {Container} from "@/components/atoms";
import {SectionController} from "@/util/controller/sectionsController";

export const metadata: Metadata = {
    title: `demo page | ${SiteConfig.title}`,
    description:
        "Here you find the latest posts about varities topics like football coding news and life and more",
    keywords: "posts,football,news,life,coding,interview_question,QA",
    alternates: {
        canonical: `${SiteConfig.siteURL}/demo`,
    },
    openGraph: {
        title: `demo page | ${SiteConfig.title}`,
        description:
            "Here you find the latest posts about varities topics like football coding news and life and more",
    },
    twitter: {
        card: "summary_large_image",
        description:
            "Here you find the latest posts about varities topics like football coding news and life and more",
    },
};

const DemoPage: React.FC = () => {
    return (
        <>
            <h1 className="hidden">{`demo page | ${SiteConfig.title}`}</h1>

            <Container>
                <SectionController sectionId={7}>
                <TeletypeSec />
                </SectionController>
                <ServicesNav/>
                <SectionController sectionId={1}>
                    <MainPosts/>
                </SectionController>

                <Banner/>
                <div className="grid grid-cols-12 md:gap-9">
                    <div className="col-span-12 md:col-span-9">
                        <SectionController sectionId={2}>
                        <PostsSec/>
                        </SectionController>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <LinearAds id={1}/>
                    </div>
                </div>
            </Container>
            <SectionController sectionId={5}>
            <SliderSec/>
            </SectionController>
            <Container>
                <div className="grid grid-cols-12 md:gap-9">
                    <div className="col-span-12 md:col-span-3">
                        <MostTab/>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <SectionController sectionId={3}>
                        <SingleCardSec/>
                        </SectionController>
                    </div>
                </div>
                <SectionController sectionId={4}>
                <VerticalPostsSec/>
                </SectionController>
                <SectionController sectionId={6}>
                <SportSec/>
                </SectionController>
            </Container>
        </>
    );
};

export default DemoPage;
