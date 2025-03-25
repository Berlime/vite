---
title: Upstream Providers
description: Upstream Providers are the providers that you use to get your data into the platform.
date: 2023-05-09
outline: docs
---

# Understanding Upstream Providers

Upstream providers are the external services and platforms that supply servers, hosting solutions, and plugins to our system. Think of them as the "source" where your development resources originate from before they reach our platform.
::: warning Important Note
We don't have direct control over these upstream providers. They operate independently and may change their services, APIs, or terms of use without prior notice.
:::

## Common Upstream Providers

Here's a simple breakdown of typical upstream providers we work with:

| Provider Type | Examples | What They Provide |
|--------------|----------|-------------------|
| Cloud Services | `AWS`, `Google Cloud`, `Azure` | Storage, computing resources |
| Payment Processors | `Stripe`, `PayPal`, `Square` | Payment transaction data |
| Social Media | `Twitter`, `Facebook`, `LinkedIn` | Social engagement data |
| Analytics | `Google Analytics`, `Mixpanel` | User behavior metrics |

## How It Works

The data flow typically looks like this:

1. Upstream Provider → 2. Our Platform/Developers/APIs → 3. Your Application/Dashboard

::: tip
Think of it like a water supply system:
- The upstream provider is like the reservoir (source of water)
- Our platform is like the water treatment plant
- Your dashboard is like the tap in your home
:::

## Important Considerations

### Service Availability

- We can't guarantee 100% uptime of upstream providers.
- If an upstream provider experiences issues, it may affect our service.
- We actively monitor all provider uptimes 24/7.
- Our team will immediately investigate and implement contingency measures if any provider experiences downtime.
- We'll notify affected users promptly about any service disruptions and our mitigation steps.

### Format Changes

Upstream providers regularly update their systems to improve security, add features, or optimize performance. These changes can affect how your application receives and processes data. Here are common types of changes you might encounter:

- **API Version Updates**: Providers may release new versions of their APIs, which could require you to update your integration code.
- **Data Format Changes**: The structure or format of the data they send might change (for example, from XML to JSON, or adding/removing specific data fields).
- **Service Term Modifications**: Changes to usage limits, pricing, authentication methods, or other terms that affect how you can use their services.
- **Response Time Variations**: Updates might affect how quickly data is delivered or processed.
- **Data Schema Evolution**: Fields might be deprecated, added, or modified in the data structure.

::: tip Monitoring and Adaptation
Our system actively monitors for any unexpected changes in data formats or API responses from your upstream providers. We continuously adapt to changes made by upstream providers to minimize disruption to your service.
:::
## Best Practices

Our developers implement several key best practices to ensure smooth integration with upstream providers:

- **Automated Credential Management**: Our system regularly validates and rotates API credentials to maintain secure connections with providers.

- **Real-time Status Monitoring**: We've integrated comprehensive monitoring systems that track provider availability and performance 24/7, alerting our team to any issues.

- **Redundancy Systems**: Where applicable, we maintain multiple provider connections and automatic failover mechanisms to ensure service continuity.

- **Update Integration Pipeline**: Our development team actively tracks provider changes and updates, implementing necessary adjustments to maintain compatibility.

These practices work together to provide you with reliable, uninterrupted access to upstream provider services while minimizing potential disruptions.

## Need Help?

To know if you experience issues with data from an upstream provider; in your client portal, you can view the lists of the upstream providers we use for your application.

1. Then, check the provider's status page by Googling their name followed by `"status page"` or `"uptime"`
2. If the provider is down, check their status page for any updates or announcements
3. If the provider is up, check their API status page to see if there are any issues
4. Contact our support team for guidance

We're here to help you navigate any challenges with upstream providers, even though they're outside our direct control..
