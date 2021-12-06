export const whatIsShoreline = {
  title: "What is Shoreline",
  caption:
    "Shoreline provides real-time automation and control for cloud operations. Operators use Shoreline to orchestrate real-time debugging and automate repairs across their fleets and services, reducing tickets and improving availability.",
  content: `---
  ## How Shoreline Works

### Automated Agents

An Agent is an efficient and non-intrusive process running in the background of all your monitored hosts. Agents constantly collect data from both the host and all connected pods and containers. This aggregated data is periodically sent to Shoreline's backend and is used to create Metrics.

Agents are also the secure link between Shoreline and your environment's [Resources](https://docs.shoreline.io/platform/resources). [Agents](https://docs.shoreline.io/platform/agents) can execute actions on your behalf -- everything from simple Linux commands to remediation playbooks. Many [Op Language](https://docs.shoreline.io/op) statements pass an API request through Shoreline's backend and onto the relevant Agents, which then execute that command across all targeted Resources.

Check out the [Agent Installation guide](https://docs.shoreline.io/installation#agents) for installation options.

## Auto-Remediation and Diagnostics

Configurable [Alarms](https://docs.shoreline.io/alarms) use [Metrics](https://docs.shoreline.io/metrics) or customizable status commands to automatically fire [Actions](https://docs.shoreline.io/actions). Actions execute custom shell commands to help you diagnose and auto-remediate issues within your infrastructure. [Alarms](https://docs.shoreline.io/alarms) can use [Bots](https://docs.shoreline.io/bots) to automate [Actions](https://docs.shoreline.io/actions).

## Monitoring

Shoreline provides a robust web-based user interface that provides real-time monitoring of all Agent-aware [Resources](https://docs.shoreline.io/platform/resources). The [Monitoring UI](https://docs.shoreline.io/ui/monitoring) helps you visually understand your infrastructure at a glance, as well as the underlying Metrics that Agents are collecting.

You can also monitor Alarms and Actions in detailed dashboards, providing an in-depth overview of what is happening within your infrastructure. Filtering and drilling down further provides full details on what Alarm fired, why, and what Actions were taken.

## Security

### Agents

Shoreline supports deployments to AWS Elastic Compute Cloud (EC2) and Kubernetes environments. The Agent runs on each virtual machine in your environment.

* Within Kubernetes, Agents are deployed as a DaemonSet resource. Read the Kubernetes Installation guide for more info.
For virtual machines, Agents are installed via a package manager. Check out the Virtual Machine Installation guide for details.

* To monitor the host virtual machine and application, the Agent ingests Metric data from Prometheus exporter-compatible sources such as a node exporter or cadvisor. All collected data is encrypted and stored locally.

The Agent discovers environmental Resources such as Kubernetes pods and containers by integrating with the EC2 API and Kubernetes API server.

To execute commands, the Agent integrates with the host virtual machine via SSH or executes commands in a pod/container via the Kubernetes API service exec interface.

### Network 

* Firewalls filter unauthorized inbound network traffic from the Internet and deny any network connection that is not explicitly authorized. Additionally, network address translation (NAT) functionality manages internal IP addresses.

* Hosts transfer Metric, Event, and Resource registration data directly to Shoreline. Shoreline integrates with platform standard exporters. The * Shoreline API is built on industry-accepted standardized protocols (TCP, HTTPS, gRPC).

* Shoreline uses Google encryption standards to ensure secure communication. All network communication utilizes SSL/TLS. End-to-end transport with 2048-bit RSA, SHA256, X.509 certificate for Agent identification, and industry-standard OpenSSL encryption library.

### Access Control

Shoreline uses [role-based security architecture](https://docs.shoreline.io/administration/access-control) and requires users of the system to be [identified and authenticated](https://docs.shoreline.io/administration/access-control#authentication-and-authorization) before using any system resources. Resources are protected by using native system security and add-on software products and services that identify and authenticate users and validate access requests against the users' authorized roles in access control lists. Employees and approved vendor personnel sign on to Shoreline infrastructure and services using either SSO or VPN, combined with two-factor authentication.

`,
};
