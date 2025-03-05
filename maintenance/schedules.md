---
title: Schedules
outline: docs
---

# Schedules

Server maintenance involves the upkeep of the physical or virtual server where your website is hosted. This includes tasks like monitoring server performance, updating the operating system and software, ensuring security patches are applied, and performing regular backups.

The goal of server maintenance is to ensure that the server remains operational, secure, and performs optimally. 

It covers the underlying infrastructure that supports multiple websites and applications, maintaining the server's health and preventing hardware failures or security breaches.

<!-- ::: tip Not to be confused with Website Maintenance
*Server maintenance* and *website maintenance* are two distinct processes that serve different purposes, they are both crucial for the smooth functioning of your online presence.
:::

Website maintenance focuses on the specific website itself. This encompasses updating website content, checking for and fixing broken links, optimizing website performance and many more.

Website maintenance aims to keep the website relevant, user-friendly, and secure from vulnerabilities that could arise from outdated components. It ensures that visitors to the website have a seamless and engaging experience.

You can learn more about how we maintain your website [here](maintenance/web-maintenance.html). -->

## WordPress Plug-Ins

We update WordPress plug-ins to ensure they are secure and functioning correctly. Some plug-ins may have update delays to ensure compatibility, ensure it safe to update. [Mission-critical](/introduction/glossaries.html#mission-critical) WordPress sites may go through a staging environment before peforming the updates on the live site.

We also conduct backups to allow easy rollback if needed. After updating, we test the site to ensure it remains functional and intact.

### Automatic Updates

Automatic updates are essential for maintaining the security and functionality of WordPress sites. By enabling automatic updates for reputable plug-ins, we ensure that the latest security patches and feature enhancements are applied promptly. This reduces the risk of vulnerabilities being exploited by malicious actors and helps keep the website running smoothly.

Automatic updates also save time and effort, as they eliminate the need for manual intervention for each update. This is particularly beneficial for websites with numerous plug-ins, as it ensures that all components are kept up-to-date without requiring constant monitoring and manual updates.

However, it's important to note that not all plug-ins are suitable for automatic updates. We carefully select which plug-ins to enable automatic updates for, based on their reputation, stability, and compatibility with the website's configuration. This approach strikes a balance between maintaining security and ensuring the website's functionality remains intact.

### Manual Updates

Not all plug-ins are created equal. Some plug-ins may have unique configurations or dependencies that could be disrupted by automatic updates.

By performing manual updates, we can carefully review the update notes, check for any potential conflicts, and ensure that the update will not negatively impact the website's functionality.

This approach allows us to maintain a higher level of control and precision, reducing the risk of unexpected issues and downtime. Additionally, manual updates provide an opportunity to perform thorough testing and validation, ensuring that the website continues to operate smoothly and securely after the update.

Manual updates and checks are performed weekly on Tuesdays.

Firewall rules for a server are essential configurations that define which incoming and outgoing traffic is allowed or blocked based on predetermined security criteria. These rules act as a protective barrier, helping to prevent unauthorized access, data breaches, and various cyber threats.

They can be set to allow or deny specific IP addresses, protocols, or ports, effectively controlling the flow of data to and from the server.

For most cases, We use third-party server managers to manage all VPS instances.

## Server Updates

::: info Maintenance Window
We will perform on Tuesdays at 4:00 AM - 5:00 AM Singapore Standard Time.
Only affected for [VPS servers](introduction/glossaries.html#vps). It will be reflected in the client portal on what type of server you are on.
:::

During this time, periodic maintenance tasks will be performed, such as applying server updates, security patches, upgrading docker images, etc. to ensure your server is running smoothly. During this time, your server and websites may experience minor interruptions. 