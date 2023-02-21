# OAuth2

The different types of **Authorization Flows** are also called **Grant Types**

OAuth does authentication not Authorization, however authorization can be implemented (maybe use JSON web tokens [[JWT]])

**Public Client**
* Web, Mobile, Desktop
* Smart TV Apps which can be accessed by the public.

**Confidential Client**
* Remote Shell Scripts
* CRON Jobs
* Microservices, etc.

There are different workflows for public and confidential clients. AKA Grant Types.

**Authorization Server** Generates and Validates Access Tokens for Clients and permissions of Users
* AWS Cognito
* Microsoft Azure AD
* Google Identity Platform
* OKTA
* Key Cloak

**OIDC** OpenID Connect
* Protocol built on Top of OAuth2
	* Old OAuth documentation can be confusion or downright wrong pre-OIDC
* Acts as an Identity Layer

**Access Token**
* Used to Verify User is Authorized to Access the Resource (Original OAUTH)

**ID Token**
* Used to Verify the User Information and Identity of User (OpenID Connect)

---
Authorization code flow grant type: default

![Authorization Code Flow](/assets/images/blog/authorization_code_flow.png)

---

PKCE "Piksee" enhanced authorization code flow grant type.
* Proof of Key Code Exchange
* Created for Public Facing Clients like web apps
* Developed using Angular, React or Vue, and also mobile applications
* Considered Best Practice to follow

This allows us to not store the client secret on the client application.

![PKCE](/assets/images/blog/PKCE.png)

Code verifyer and algorithm are added.
The client generates the code challenge and sends it plus the code challenge method (algo) to the authorization server. 
Which validates the access token.


![Authorization Flow Continued](/assets/images/blog/authorization_flow_cont.png)


Access token: short lived
Refresh token: long lived used to get a new access token from the auth server.

---
Client credentials grant flow
Pattern: Token Relay
Machine to machine authorization. 

Clients make a POST Request to Token Endpoint to retrieve Access Token with Grant Type as Client Credentials. It does not make sense here to have a login page.

![Token Relay](/assets/images/blog/token_relay.png)

This flow is simpler because of the confidentiality between the client and server.



**How refresh tokens work**
Access token: short lived
Refresh token: long lived used to get a new access token from the auth server.
We send the refresh token to the authorization server to get a new access token without prompting the user for a UN/PW.

Password grant authorization flow: Don't ever use this.


