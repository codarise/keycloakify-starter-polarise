import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "delete-account-confirm.ftl" });

const meta = {
    title: "login/delete-account-confirm.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithCancelButton: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                triggered_from_aia: true
            }}
        />
    )
};

export const WithoutCancelButton: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                triggered_from_aia: false
            }}
        />
    )
};

export const WithFrenchLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                triggered_from_aia: true
            }}
        />
    )
};

export const WithGermanLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "de"
                },
                triggered_from_aia: false
            }}
        />
    )
};

