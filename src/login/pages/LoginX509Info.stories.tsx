import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-x509-info.ftl" });

const meta = {
    title: "login/login-x509-info.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithCertificateAndUser: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                x509: {
                    formData: {
                        subjectDN: "CN=John Doe, OU=IT Department, O=Company Inc, C=US",
                        isUserEnabled: true,
                        username: "john.doe@company.com"
                    }
                }
            }}
        />
    )
};

export const WithCertificateNoUser: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                x509: {
                    formData: {
                        subjectDN: "CN=Jane Smith, OU=Engineering, O=Tech Corp, C=CA",
                        isUserEnabled: false,
                        username: undefined
                    }
                }
            }}
        />
    )
};

export const WithNoCertificate: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                x509: {
                    formData: {
                        subjectDN: undefined,
                        isUserEnabled: false,
                        username: undefined
                    }
                }
            }}
        />
    )
};

export const WithLongCertificateDN: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                x509: {
                    formData: {
                        subjectDN: "CN=Very Long Certificate Name That Might Cause Layout Issues, OU=Very Long Organizational Unit Name, O=Very Long Organization Name That Exceeds Normal Length, L=Very Long City Name, ST=Very Long State Name, C=Very Long Country Name",
                        isUserEnabled: true,
                        username: "very.long.username@very-long-domain-name.com"
                    }
                }
            }}
        />
    )
};

export const WithLongUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                x509: {
                    formData: {
                        subjectDN: "CN=John Doe, OU=IT, O=Company, C=US",
                        isUserEnabled: true,
                        username: "very.long.username.that.might.cause.layout.issues@very-long-domain-name.com"
                    }
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
                x509: {
                    formData: {
                        subjectDN: "CN=Jean Dupont, OU=Département IT, O=Société Inc, C=FR",
                        isUserEnabled: true,
                        username: "jean.dupont@societe.fr"
                    }
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
                x509: {
                    formData: {
                        subjectDN: "CN=Hans Mueller, OU=IT-Abteilung, O=Firma GmbH, C=DE",
                        isUserEnabled: true,
                        username: "hans.mueller@firma.de"
                    }
                }
            }}
        />
    )
};
