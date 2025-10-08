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
                        {
                            consentScreenText: "Read your profile information",
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Access your email address",
                            dynamicScopeParameter: null
                        }
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
                    name: null,
                    attributes: {
                        logoUri: "https://via.placeholder.com/64x64/28a745/ffffff?text=API"
                    }
                },
                oauth: {
                    code: "xyz789uvw012",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Read your basic profile",
                            dynamicScopeParameter: null
                        }
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
                        logoUri: null
                    }
                },
                oauth: {
                    code: "def456ghi789",
                    clientScopesRequested: [
                        {
                            consentScreenText: "View your account details",
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Manage your settings",
                            dynamicScopeParameter: null
                        }
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
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Access your repositories",
                            dynamicScopeParameter: "my-organization"
                        },
                        {
                            consentScreenText: "Manage your projects",
                            dynamicScopeParameter: "project-123"
                        }
                    ]
                }
            }}
        />
    )
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
                        tosUri: "https://example.com/terms-of-service"
                    }
                },
                oauth: {
                    code: "jkl012mno345",
                    clientScopesRequested: [
                        {
                            consentScreenText: "Read your profile information",
                            dynamicScopeParameter: null
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
                            dynamicScopeParameter: null
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
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Access your email address",
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Manage your account settings",
                            dynamicScopeParameter: null
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
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Access your email address",
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "View your account details",
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Manage your settings",
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Access your files",
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Send messages on your behalf",
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Read your calendar",
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Access your contacts",
                            dynamicScopeParameter: null
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
                            dynamicScopeParameter: null
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
                            dynamicScopeParameter: null
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
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Accéder à votre adresse e-mail",
                            dynamicScopeParameter: null
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
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Auf Ihre E-Mail-Adresse zugreifen",
                            dynamicScopeParameter: null
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
                            dynamicScopeParameter: null
                        },
                        {
                            consentScreenText: "Acceder a su dirección de correo electrónico",
                            dynamicScopeParameter: null
                        }
                    ]
                }
            }}
        />
    )
};
