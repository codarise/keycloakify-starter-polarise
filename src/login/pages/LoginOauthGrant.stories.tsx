import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-oauth-grant.ftl" });

const meta = {
    title: "login/login-oauth-grant.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithBasicClient: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "my-app",
                    name: "My Application",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/007bff/ffffff?text=App"
                    }
                },
                oauth: {
                    code: "abc123def456",
                    clientScopesRequested: [
                    ]
                }
            }}
        />
    )
};

export const WithClientWithoutName: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "anonymous-app",
                    name: undefined,
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/28a745/ffffff?text=API"
                    }
                },
                oauth: {
                    code: "xyz789uvw012",
                    clientScopesRequested: [
                    ]
                }
            }}
        />
    )
};

export const WithClientWithoutLogo: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "no-logo-app",
                    name: "Application Without Logo",
                    attributes: {
                        logoUri: undefined
                    }
                },
                oauth: {
                    code: "def456ghi789",
                    clientScopesRequested: [

                    ]
                }
            }}
        />
    )
};

export const WithDynamicScopes: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "dynamic-scope-app",
                    name: "Dynamic Scope Application",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/dc3545/ffffff?text=DS"
                    }
                },
                oauth: {
                    code: "ghi789jkl012",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Read your profile information",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Access your repositories",
                            dynamicScopeParameter: "my-organization"
                        }
                    ]
                }
            }}
        />
    ),
};

export const WithTermsOfService: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "tos-app",
                    name: "Application with Terms",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/6f42c1/ffffff?text=ToS",
                        tosUri: "https://example.com/terms-of-service",
                    }
                },
                oauth: {
                    code: "jkl012mno345",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Read your profile information",
                            dynamicScopeParameter: undefined
                        }
                    ]
                }
            }}
        />
    )
};

export const WithPrivacyPolicy: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "privacy-app",
                    name: "Privacy-Focused App",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/20c997/ffffff?text=PP",
                        policyUri: "https://example.com/privacy-policy"
                    }
                },
                oauth: {
                    code: "mno345pqr678",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Access your email address",
                            dynamicScopeParameter: undefined
                        }
                    ]
                }
            }}
        />
    )
};

export const WithBothTermsAndPolicy: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "full-legal-app",
                    name: "Full Legal App",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/fd7e14/ffffff?text=FL",
                        tosUri: "https://example.com/terms-of-service",
                        policyUri: "https://example.com/privacy-policy"
                    }
                },
                oauth: {
                    code: "pqr678stu901",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Read your profile information",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Access your email address",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Manage your account settings",
                            dynamicScopeParameter: undefined
                        }
                    ]
                }
            }}
        />
    )
};

export const WithManyScopes: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "comprehensive-app",
                    name: "Comprehensive Application",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/6c757d/ffffff?text=CA"
                    }
                },
                oauth: {
                    code: "stu901vwx234",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Read your profile information",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Access your email address",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "View your account details",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Manage your settings",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Access your files",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Send messages on your behalf",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Read your calendar",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Access your contacts",
                            dynamicScopeParameter: undefined
                        }
                    ]
                }
            }}
        />
    )
};

export const WithLongClientName: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "very-long-client-id-that-might-cause-layout-issues",
                    name: "Very Long Application Name That Might Cause Layout Issues and Should Be Tested",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/e83e8c/ffffff?text=Long"
                    }
                },
                oauth: {
                    code: "vwx234yza567",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Read your profile information",
                            dynamicScopeParameter: undefined
                        }
                    ]
                }
            }}
        />
    )
};

export const WithLongScopeText: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                client: {
                    clientId: "long-scope-app",
                    name: "Long Scope App",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/17a2b8/ffffff?text=LS"
                    }
                },
                oauth: {
                    code: "yza567bcd890",
                    clientScopesRequested: [
                        {
                            consentScreenText: "This is a very long scope description that might cause layout issues and should be tested to ensure proper text wrapping and display",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Another long scope description with dynamic parameter",
                            dynamicScopeParameter: "very-long-dynamic-parameter-that-might-cause-layout-issues"
                        }
                    ]
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
                client: {
                    clientId: "app-francaise",
                    name: "Application Française",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/007bff/ffffff?text=FR"
                    }
                },
                oauth: {
                    code: "bcd890efg123",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Lire vos informations de profil",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Accéder à votre adresse e-mail",
                            dynamicScopeParameter: undefined
                        }
                    ]
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
                client: {
                    clientId: "deutsche-app",
                    name: "Deutsche Anwendung",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/28a745/ffffff?text=DE"
                    }
                },
                oauth: {
                    code: "efg123hij456",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Ihre Profilinformationen lesen",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Auf Ihre E-Mail-Adresse zugreifen",
                            dynamicScopeParameter: undefined
                        }
                    ]
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
                client: {
                    clientId: "aplicacion-espanola",
                    name: "Aplicación Española",
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/dc3545/ffffff?text=ES"
                    }
                },
                oauth: {
                    code: "hij456klm789",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Leer su información de perfil",
                            dynamicScopeParameter: undefined
                        },
                        {
                            consentScreenText: "Acceder a su dirección de correo electrónico",
                            dynamicScopeParameter: undefined
                        }
                    ]
                }
            }}
        />
    )
};
