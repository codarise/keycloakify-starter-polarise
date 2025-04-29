import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import "./main.css";
import { getIsDark } from "../components/isDark";
import { ThemeProvider } from "../components/theme-provider";


const isDark = getIsDark();

const UserProfileFormFields = lazy(() => import("./UserProfileFormFields"));
const Login = lazy(() => import("./pages/Login"));
const UpdateEmail = lazy(() => import("./pages/UpdateEmail"));
const LoginPassword = lazy(() => import("./pages/LoginPassword"));
const LoginUsername = lazy(() => import("./pages/LoginUsername"));
const LoginResetPassword = lazy(() => import("./pages/LoginResetPassword"));
const LoginUpdatePassword = lazy(() => import("./pages/LoginUpdatePassword"));
const LoginVerifyEmail = lazy(() => import("./pages/LoginVerifyEmail"));
const LoginUpdateProfile = lazy(() => import("./pages/LoginUpdateProfile"));
const LoginPageExpired = lazy(() => import("./pages/LoginPageExpired"));


const doMakeUserConfirmPassword = true;


export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            <ThemeProvider defaultTheme={isDark ? "dark" : "light"} storageKey="vite-ui-theme">
                {(() => {
                    switch (kcContext.pageId) {
                        case "login.ftl": return (
                        <Login
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                        />
                    );
                    case "update-email.ftl": return (
                        <UpdateEmail
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                            UserProfileFormFields={UserProfileFormFields}
                            doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                        />
                    );
                    case "login-password.ftl": return (
                        <LoginPassword
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                        />
                    );
                    case "login-username.ftl": return (
                        <LoginUsername
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                        />
                    );
                    case "login-reset-password.ftl": return (
                        <LoginResetPassword
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                        />
                       );
                       case "login-update-password.ftl": return (
                       <LoginUpdatePassword
                           {...{ kcContext, i18n, classes }}
                           Template={Template}
                           doUseDefaultCss={false}
                       />
                   );
                   case "login-verify-email.ftl": return (
                    <LoginVerifyEmail
                        {...{ kcContext, i18n, classes }}
                        Template={Template}
                        doUseDefaultCss={false}
                    />
                   );
                   case "login-update-profile.ftl": return (
                    <LoginUpdateProfile
                        {...{ kcContext, i18n, classes }}
                        Template={Template}
                        doUseDefaultCss={false}
                        UserProfileFormFields={UserProfileFormFields}
                        doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                    />
                   );
                   case "login-page-expired.ftl": return (
                    <LoginPageExpired
                        {...{ kcContext, i18n, classes }}
                        Template={Template}
                        doUseDefaultCss={false}
                    />
                   );
                   default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={false}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
            </ThemeProvider>
        </Suspense>
    );
}

const classes = {} satisfies { [key in ClassKey]?: string };
