---
title: Intranets
outline: docs
---


# Intranet Solutions

An intranet is a private network that only your company's employees can access. Think of it as your organization's own mini-internet where staff can share files, communicate, and access company resources securely.

Unlike public websites, your intranet is protected and only available to authorized team members.

We offer intranet plans that grow with your business. Simply pick the option that matches your team size and what you need to accomplish.

## Subscription Tiers

We model our pricing competitively, referencing industry standards like Microsoft 365, Notion, and other enterprise collaboration tools for value comparison. Our intranet solutions can integrate with virtually any application that offers API connectivity, including Slack, Asana, Jira, Salesforce, and custom internal systems. Note that the cost of software licenses is not included in the pricing below. All prices are per user per month.

Our intranet solutions are designed for team collaboration and knowledge sharing. They include features like document management, team communication channels, project tracking, and customizable dashboards that adapt to your specific business processes.

::: warning Minimum User Requirement
All intranet plans require a minimum of 5 users. This ensures proper collaboration functionality and cost-effective implementation of your private network infrastructure.
:::

| Feature                     | Basic                 | Enterprise                   | Add-On (Per Feature) |
| --------------------------- | --------------------- | ---------------------------- | ------------------- |
| **Price/User/Software***    | $147/month            | $447/month                   | N/A |
| **Document Libraries**      | Up to 5               | Up to 50                     | $50/additional library |
| **Documentation**           | ❌                   | ✅ Cloud with User Auth     | $100/month |
| **Custom Databases**        | 1 (basic)             | Up to 5 (enterprise-grade)  | $200/additional DB |
| **Workflow Automations**    | 5 workflows with 2 connections     | 15 workflows with up to 15 connections   | $75/additional workflow |
| **API Integrations**        | ❌                    | Up to 25 + custom APIs       | $150/additional API |
| **Business Intelligence**   | Basic reports         | AI-powered analytics         | $300/custom report |
| **Mobile Access**           | Basic viewing         | Custom mobile experiences    | $250/custom app |
| **Security Controls**       | Basic authentication  | Zero-trust + compliance      | $400/security module |
| **Dedicated Support**       | Email only            | 24/7 dedicated team          | $500/dedicated agent |
| **Version History**         | 30 days               | 365 days                     | $100/additional year |
| **Audit Logging**           | Basic                 | Comprehensive                | $150/custom log type |
| **Single Sign-On**          | ❌                    | ✅ + SCIM provisioning       | $200/SSO integration |
| **Custom Branding**         | Basic                 | White-labeled experience     | $300/brand package |

*Software costs are not included in the pricing. Additional software licenses (like Microsoft 365, Slack, etc.) will be billed separately based on your requirements.

## Application Integration

Our intranet solutions enable seamless connectivity between your business applications through multiple integration approaches.

### Integration Methods

| Method | Description | Best For |
|--------|-------------|----------|
| Native Integrations | Direct built-in connectors with deep API access | Enterprise users needing optimal performance |
| Third-Party Tools | iPaaS platforms for custom workflow automation | Complex multi-app orchestration |

### Native Integration Features

::: tip Key Benefits
- Direct data flow without intermediaries
- Enhanced performance and reliability 
- Deep feature access to supported apps
- Built-in security and compliance
:::

### Third-Party Automation Options

Popular iPaaS platforms we support:

- **Zapier** - 3000+ app integrations
- **Make** (formerly Integromat) - Visual workflow builder
- **Power Automate** - Microsoft ecosystem integration
- **Pabbly Connect** - Cost-effective automation
- **OttoKit** - Developer-friendly platform

::: warning Integration Selection
Choose your integration method based on:
- Application compatibility
- Workflow complexity
- Technical expertise
- Security requirements
:::

### Tier Availability

| Feature | Basic | Enterprise |
|---------|--------|------------|
| Native API Access | Limited | Extensive |
| Third-Party Tools | ✅ | ✅ |
| Custom Integrations | Add-on | Included |

## Key Features Explained

*   **Core Features**: Includes essential collaboration tools, document sharing, and basic [project management](../introduction/glossaries.md#project-management) capabilities.
*   **Advanced Tools**: Adds features like workflow automation, advanced analytics, and integration options.
*   **Premium Support**: Offers dedicated account management and priority support channels. See our [Support Policy](../introduction/glossaries.md#support-policy) for details *(Note: Link assumes 'Support Policy' term exists in glossaries)*.
*   **Security Pack**: Defines the level of security protocols, compliance certifications, and data backup frequency.

::: warning Important Note
Project limits are calculated based on active projects within a billing cycle. Archived projects do not count towards your limit.
:::

## Technical Examples

```javascript
// Example: Fetching user data via API (Conceptual)
async function getUserProfile(userId) {
  const response = await fetch(`/api/intranet/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  return await response.json();
}
```

Need a custom solution? [Contact Sales](mailto:sales@example.com) for bespoke Enterprise options.
