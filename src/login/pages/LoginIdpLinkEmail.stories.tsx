import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-idp-link-email.ftl" });

const meta = {
    title: "login/login-idp-link-email.ftl",
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
                idpAlias: "google",
                brokerContext: {
                    username: "john.doe@gmail.com"
                },
                realm: {
                    displayName: "My Application"
                }
            }}
        />
    )
};

export const WithGitHubIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "github",
                brokerContext: {
                    username: "johndoe"
                },
                realm: {
                    displayName: "Development Portal"
                }
            }}
        />
    )
};

export const WithMicrosoftIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "microsoft",
                brokerContext: {
                    username: "john.doe@company.com"
                },
                realm: {
                    displayName: "Corporate Portal"
                }
            }}
        />
    )
};

export const WithFacebookIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "facebook",
                brokerContext: {
                    username: "john.doe@facebook.com"
                },
                realm: {
                    displayName: "Social Platform"
                }
            }}
        />
    )
};

export const WithTwitterIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "twitter",
                brokerContext: {
                    username: "@johndoe"
                },
                realm: {
                    displayName: "News Platform"
                }
            }}
        />
    )
};

export const WithLinkedInIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "linkedin",
                brokerContext: {
                    username: "john-doe-professional"
                },
                realm: {
                    displayName: "Professional Network"
                }
            }}
        />
    )
};

export const WithCustomIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "custom-provider",
                brokerContext: {
                    username: "user123"
                },
                realm: {
                    displayName: "Custom Application"
                }
            }}
        />
    )
};

export const WithLongUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "google",
                brokerContext: {
                    username: "very.long.username.that.might.cause.layout.issues@example.com"
                },
                realm: {
                    displayName: "Application with Very Long Name That Might Cause Layout Issues"
                }
            }}
        />
    )
};

export const WithSpecialCharactersUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "github",
                brokerContext: {
                    username: "user-name_with.special+chars@domain.co.uk"
                },
                realm: {
                    displayName: "Special Characters Test"
                }
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
                idpAlias: "google",
                brokerContext: {
                    username: "jean.martin@gmail.com"
                },
                realm: {
                    displayName: "Mon Application"
                }
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
                idpAlias: "microsoft",
                brokerContext: {
                    username: "hans.mueller@firma.de"
                },
                realm: {
                    displayName: "Unternehmensportal"
                }
            }}
        />
    )
};

export const WithSpanishLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "es"
                },
                idpAlias: "facebook",
                brokerContext: {
                    username: "juan.perez@facebook.com"
                },
                realm: {
                    displayName: "Plataforma Social"
                }
            }}
        />
    )
};

export const WithJapaneseLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "ja"
                },
                idpAlias: "github",
                brokerContext: {
                    username: "yamada.taro"
                },
                realm: {
                    displayName: "開発ポータル"
                }
            }}
        />
    )
};

export const WithChineseLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "zh_CN"
                },
                idpAlias: "wechat",
                brokerContext: {
                    username: "zhang.san"
                },
                realm: {
                    displayName: "企业门户"
                }
            }}
        />
    )
};

export const WithEmptyRealmName: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "google",
                brokerContext: {
                    username: "john.doe@gmail.com"
                },
                realm: {
                    displayName: ""
                }
            }}
        />
    )
};

export const WithNullRealmName: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "github",
                brokerContext: {
                    username: "johndoe"
                },
                realm: {
                    displayName: null
                }
            }}
        />
    )
};
