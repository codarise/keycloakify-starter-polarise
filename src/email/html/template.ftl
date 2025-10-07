<#--
  This file has been claimed for ownership from @keycloakify/email-native version 260007.0.0.
  To relinquish ownership and restore this file to its original content, run the following command:
  
  $ npx keycloakify own --path "email/html/template.ftl" --revert
-->

<#macro emailLayout>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${msg("emailTitle", realmName)?no_esc}</title>
    <style type="text/css">
        
        @font-face {
            font-family: 'Aeonik-Regular';
            src: url('${url.resourcesUrl}/aeonik-regular.woff2') format('woff2'),
                 url('${url.resourcesUrl}/aeonik-regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }


        
        body {
            margin: 0;
            padding: 40px 8px 8px 8px;
            font-family: 'Aeonik-Regular', 'Inter', Arial, sans-serif;
            background-color: #0A0A0A;
            color: #E5E5E5;
            line-height: 1.6;
            font-size: 14px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            border-radius: 8px;
            border: 1px solid #202020;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.10);
        }
        
        .email-header {
            padding: 20px 30px;
            background-color: #181818;
            border-bottom: 1px solid #202020;
        }
        
        .logo {
            max-height: 14px;
        }
        
        .email-content {
            padding: 24px;
        }
        
        .email-footer {
            padding: 20px 30px;
            border-top: 1px solid #202020;
            font-size: 12px;
            color: #666;
            text-align: center;
        }
        
        a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #FAFAFA;
            color: #0A0A0A !important;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            margin: 20px 0;
        }
        
        a:hover {
            background-color: #E5E5E5;
            text-decoration: none;
        }
        
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #FAFAFA;
            color: #0A0A0A !important;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            margin: 20px 0;
        }
        
        .button:hover {
            background-color: #E5E5E5;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <img src="${url.resourcesUrl}/pola-logo-dark.png" alt="Logo" class="logo">
        </div>
        
        <div class="email-content">
            <#nested>
        </div>
        
        <div class="email-footer">
            <p>&copy; ${.now?string('yyyy')} Polarise. ${realmName}. All rights reserved.</p>
            <p>This is an automated message, please do not reply.</p>
            <p>www.polarise.eu</p>
        </div>
    </div>
</body>
</html>
</#macro>
