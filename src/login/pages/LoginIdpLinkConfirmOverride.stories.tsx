import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-idp-link-confirm-override.ftl" });

const meta = {
    title: "login/login-idp-link-confirm-override.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithGoogleIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpDisplayName: "Google"
            }}
        />
    )
};

export const WithGitHubIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpDisplayName: "GitHub"
            }}
        />
    )
};

export const WithMicrosoftIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpDisplayName: "Microsoft"
            }}
        />
    )
};

export const WithFacebookIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpDisplayName: "Facebook"
            }}
        />
    )
};

export const WithCustomIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpDisplayName: "Custom Identity Provider"
            }}
        />
    )
};

export const WithLongIdpName: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpDisplayName: "Very Long Identity Provider Name That Might Cause Layout Issues and Should Be Tested"
            }}
        />
    )
};

export const WithSpecialCharactersIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpDisplayName: "IDP with Special Characters & Numbers 123"
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
                idpDisplayName: "Google"
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
                idpDisplayName: "GitHub"
            }}
        />
    )
};
