(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{381:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mount-the-tinc-lan-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mount-the-tinc-lan-node"}},[t._v("#")]),t._v(" Mount the Tinc LAN node")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("This configuration example is based on CentOS 8, please modify as appropriate.")])]),t._v(" "),e("p",[t._v("Nowadays, Cloudflare's CDN is widely used to prevent GFW from blocking IP, but at present Cloudflare has long been overwhelmed with traffic forwarding for this purpose, especially the frequent occurrence of CDN node explosion problems at night, providing a new way to alleviate Cloudflare's perennial night The problem of slowness.")]),t._v(" "),e("p",[t._v("This way of constructing the V2Ray solution is to use the intranet penetration software to use all the VPSs in your hands as network nodes to select the IP that is not shielded by the GFW as the master node, and all V2Ray data request the master node to be diverted to Other VPS: When the GFW blocks the IP of the master node, let other nodes rise to the master node, and the original master node drops to the load node.")]),t._v(" "),e("blockquote",[e("p",[t._v("This mode is similar to the "),e("code",[t._v("Follwer/Leader")]),t._v(" mode. "),e("code",[t._v("Leader")]),t._v(" selects the best VPS to proxy all V2ray traffic and forward it to "),e("code",[t._v("Follwer")]),t._v(".")])]),t._v(" "),e("p",[t._v("Please note: The ideas and methods provided in this tutorial must have at least a certain level of operating ability for the Linux system. If you don't have a clear understanding, please don't mess around!")]),t._v(" "),e("p",[t._v("The program requirements here have the following requirements:")]),t._v(" "),e("ul",[e("li",[t._v("At least two servers")]),t._v(" "),e("li",[t._v("Nginx-based upstream")]),t._v(" "),e("li",[t._v("Tinc-based intranet penetration node function")])]),t._v(" "),e("p",[t._v("The main configuration purpose here:\nIf the server IP is blocked, another server will be used directly to participate in node forwarding. Generally, GFW will block the IP for a time limit, and it will continue to use the original IP in rotation after the blocking period such as through the node forwarding.")]),t._v(" "),e("h2",{attrs:{id:"tinc-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tinc-installation"}},[t._v("#")]),t._v(" Tinc installation")]),t._v(" "),e("p",[t._v("The kernel's "),e("code",[t._v("ip_foward")]),t._v(" function must be enabled before the configuration starts. If it is not enabled, please manually enable forwarding.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sysctl")]),t._v(" -a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" ip_forward "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Check whether ip_forward forwarding is enabled [net.ipv4.ip_forward=1]")]),t._v("\n")])])]),e("p",[t._v("The reason why Tinc is used as the penetration software in this example is because it is simple enough and dependent on the performance of C language programs, and Tinc's IPv6 support is not bad, and the configuration is relatively simple and not that complicated. Other frp, ngrok, etc. can be customized Get used to choosing.")]),t._v(" "),e("p",[t._v("Some distribution sources have built-in Tinc, but this article uses compile and install to deploy Tinc.\nThe download address of the latest version of Tinc can be found on "),e("a",{attrs:{href:"https://www.tinc-vpn.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Website"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("h3",{attrs:{id:"tinc-compile-and-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tinc-compile-and-install"}},[t._v("#")]),t._v(" Tinc compile and install")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /tmp "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# My usual practice is to download and compile in the /tmp directory to prevent downloading and compilation from being scattered in other directories")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://www.tinc-vpn.org/packages/tinc-1.0.36.tar.gz "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" tinc.tar.gz "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Download and get the latest version of the source code package")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-xf")]),t._v(" tinc.tar.gz --one-top-level --strip-components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unzip the compressed package")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tinc "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enter the folder")]),t._v("\n")])])]),e("p",[t._v("Before starting the compilation work, you need to install the corresponding dependent libraries:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc cmake "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" openssl-devel zlib-devel lzo-devel "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CentOS installation, other distributions can be searched and installed by name")]),t._v("\n")])])]),e("p",[t._v("After confirming the installation of the dependent library, start compiling and installing:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ./configure\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Root permission is needed to install here")]),t._v("\n$ tincd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Test and print the version number after installation")]),t._v("\n")])])]),e("h3",{attrs:{id:"systemd-service-file-modification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#systemd-service-file-modification"}},[t._v("#")]),t._v(" systemd service file modification")]),t._v(" "),e("p",[t._v("The compressed package downloaded here comes with two system services, which can actually be modified:")]),t._v(" "),e("ul",[e("li",[t._v("/tmp/tinc/systemd/tinc.service.in")]),t._v(" "),e("li",[t._v("/tmp/tinc/systemd/tinc@.service.in")])]),t._v(" "),e("p",[e("code",[t._v("tinc.service.in")]),t._v(" file configuration:")]),t._v(" "),e("p",[t._v("Content modification:")]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Shield `WorkingDirectory=@sysconfdir@/tinc`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add the following content")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("WorkingDirectory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/usr/local/etc/tinc")]),t._v("\n")])])]),e("p",[t._v("Copy to the systemd folder:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /tmp/tinc/systemd/tinc.service.in /lib/systemd/system/tinc.service "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Copy to the system service folder")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /lib/systemd/system/tinc.service "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Modify content")]),t._v("\n")])])]),e("p",[e("code",[t._v("tinc@.service.in")]),t._v(" file configuration:")]),t._v(" "),e("p",[t._v("Content modification:")]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Block the following")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# WorkingDirectory=@sysconfdir@/tinc/%i")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ExecStart=@sbindir@/tincd -n %i -D")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ExecReload=@sbindir@/tincd -n %i -kHUP")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add the following content")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("WorkingDirectory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/usr/local/etc/tinc/%i")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("ExecStart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/usr/local/sbin/tincd -n %i -D")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("ExecReload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/usr/local/sbin/tincd -n %i -kHUP")]),t._v("\n")])])]),e("p",[t._v("Copy to the systemd folder:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /tmp/tinc/systemd/tinc@.service.in /lib/systemd/system/tinc@.service "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Copy to the system service folder")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /lib/systemd/system/tinc@.service "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Modify content")]),t._v("\n")])])]),e("h3",{attrs:{id:"finishing-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finishing-work"}},[t._v("#")]),t._v(" Finishing work")]),t._v(" "),e("p",[t._v("After completing the configuration copy and modification, prepare the final system configuration loading process without any problems")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /usr/local/var/run/ "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create and run PID directory")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /usr/local/etc/tinc "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a configuration directory for service configuration loading")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /usr/local/etc/tinc /etc/tinc "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set the soft link of the /etc configuration file")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl unmask tinc "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# refresh the Systemctl system service just loaded")]),t._v("\n")])])]),e("h2",{attrs:{id:"build-a-tinc-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-a-tinc-node"}},[t._v("#")]),t._v(" Build a tinc node")]),t._v(" "),e("p",[t._v("It should be stated here that the following specifications need to be clarified:")]),t._v(" "),e("ul",[e("li",[t._v("10.0.0.1 is the main node that mainly accepts client V2ray data")]),t._v(" "),e("li",[t._v("10.0.0.2~n are the load nodes forwarded by the agent")]),t._v(" "),e("li",[t._v("The master node uses Nginx to forward data traffic to 10.0.0.2~n to other servers")]),t._v(" "),e("li",[t._v("All nodes need to install Tinc and Nginx")])]),t._v(" "),e("h3",{attrs:{id:"construction-of-the-main-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#construction-of-the-main-node"}},[t._v("#")]),t._v(" Construction of the main node")]),t._v(" "),e("p",[t._v("Build information for creating a node:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /etc/tinc "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Enter the configuration directory")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /etc/tinc/v2ray/hosts "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a V2ray penetration node and set it to allow access to the host configuration directory")]),t._v("\n")])])]),e("p",[t._v("Edit the configuration file (/etc/tinc/v2ray/tinc.conf):")]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Here Name is the name of the configuration file. I generally like to name this file node `master-slave`/`node_01-node_02`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## The default port monitors 665, here is set 20665, generally I don't like to use the default port directly, it is easy to be scanned out of the corresponding service by the robot")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Here routing mode uses switch mode [Switch ], other modes can refer to the official website configuration")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("v2ray")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("20065")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("switch")]),t._v("\n")])])]),e("p",[t._v("Write the details of the master node:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/tinc/v2ray/hosts/master\n")])])]),e("p",[t._v("Main node link information content:")]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Here Address represents own address IP and port opening information")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## If the server IP is Ban, you need to switch the master node to the load node and remember to change the IP to the master node IP")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Subnet represents the address of the intranet penetration node")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Address")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("VPS own IP 20665")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Subnet")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10.0.0.1/32")]),t._v("\n")])])]),e("p",[t._v("After completion, you need to generate the connection key, and he will attach the key information at the end of the master file")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The general format here is tincd -n node name -K [2048/4096, the encryption level is not recommended too high, V2Ray itself is with encrypted unnecessary data and then too complex encryption]")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /usr/local/sbin/tincd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" v2ray "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-K")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\n")])])]),e("p",[t._v("Write a script to start the virtual switch (/etc/tinc/v2ray/tinc-up), the content is as follows:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10.0.0.1 represents the node address occupied by the node, which must be unique")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$INTERFACE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.1 netmask "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0\n")])])]),e("p",[t._v("Write the error shutdown script (/etc/tinc/v2ray/tinc-down) as follows:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$INTERFACE")]),t._v(" down\n")])])]),e("p",[t._v("Finish the work, and finally grant script execution permissions and manually open ports/services:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /etc/tinc/v2ray/tinc-* "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Grant script startup permission,")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start tinc@v2ray "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start system service")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" firewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20665")]),t._v("/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If there is a firewall, remember to open the external port")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" firewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--reload")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Update firewall configuration")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" tinc@v2ray "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Automatically start the service at boot, this is actually recommended to debug and then enable")]),t._v("\n")])])]),e("h3",{attrs:{id:"construction-of-load-point"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#construction-of-load-point"}},[t._v("#")]),t._v(" Construction of load point")]),t._v(" "),e("p",[t._v("The installation and configuration method is basically the same as that of the master node. Here, the process is roughly summarized below, and only the key configuration nodes are noted.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/tinc/v2ray/hosts "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Confirm the configuration file directory consistent with the master node")]),t._v("\n")])])]),e("p",[t._v("The configuration node information (/etc/tinc/v2ray/tinc.conf) is slightly different here, please refer to the following example:")]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Name represents the configuration file name of the load node [hosts/slave_01], this file will be placed in the hosts directory of the master node later")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ConnectTo represents the intranet node configuration file [hosts/master] through which the access is penetrated. This file is the configuration file that copies the hosts of the master node")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Points to know here:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# * Name cannot conflict with other nodes")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# * ConnectTo must be a configuration file with a key attached to the master node")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# * Interface/Mode must be consistent with the master node configuration")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("slave_01")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("v2ray")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("ConnectTo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("switch")]),t._v("\n")])])]),e("p",[t._v("Configure the link (/etc/tinc/v2ray/hosts/slave_01), the content is as follows:")]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Note that this must correspond to 10.0.0.2～255 of the server")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is the intranet IP of the node")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Subnet")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10.0.0.2/32")]),t._v("\n")])])]),e("p",[t._v("Generate key information after the final configuration:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /usr/local/sbin/tincd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" v2ray "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-K")]),t._v("\n")])])]),e("p",[t._v("The content of the startup script of the load node is different [/etc/tinc/v2ray/tinc-up]")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The IP address here is changed to the address selected by the node")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$INTERFACE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.2 netmask "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0\n")])])]),e("p",[t._v("When starting, please remember to copy the hosts file under the master node/load node to their respective directories to ensure that the hosts directories of both parties have the following corresponding contents:")]),t._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v("$ ls -l /etc/v2ray/hosts\n  master [master node file]\n  slave_01 [load node 01]\n  slave_02 [load node 02]\n  ...\n")])])]),e("p",[t._v("Here, the load node does not need to open any ports, all connection information is recorded in the master node information (public network IP and port information).\nBut you need to manually configure the firewall, and all load nodes are allowed to pass the internal 10.0.0.1 (mentioned in the following chapter).")]),t._v(" "),e("p",[t._v("Tinc does not have a log file function. Here is a recommended way to debug the connection, use SSH connection to test whether it is connected:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@10.0.0.1 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The load node tests whether ssh can access the master node through the suspended 10.0.0.1")]),t._v("\n")])])]),e("h2",{attrs:{id:"load-node-v2ray-construction-10-0-0-2-n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-node-v2ray-construction-10-0-0-2-n"}},[t._v("#")]),t._v(" Load node V2Ray construction (10.0.0.2~n)")]),t._v(" "),e("p",[t._v("The V2Ray installed here directly refers to other configurations, just need to explain that it is not recommended to use any forwarding/masquerading protocol for processing;\nDirectly use TCP to forward data, because Tinc itself has a data security encryption function, if you choose other V2ray other camouflage protocols, the performance will be greatly reduced.\nAll load nodes need to install V2Ray, and the configuration file is basically the same:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/log/v2ray/access.log"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/log/v2ray/error.log"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"loglevel"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warning"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Start a V2ray port randomly here, and directly follow the load node request 10.0.0.2:10000/10.0.0.3:10000")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Open the public network here, remember that firewall-cmd I generally use firewal-cmd to manage the port, here there is no way to access it through the public network.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("After starting V2Ray, you need to release the 10.0.0.x address in a targeted manner. Remember to change the port to the V2Ray server port information under the load node:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" firewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" --add-rich-rule"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rule family="')]),t._v("ipv4"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" source address="')]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.1"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" port protocol="')]),t._v("tcp"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" port="')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("V2Ray's server port"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" accept"')]),t._v("\n")])])]),e("p",[t._v("In this way, the load node of V2Ray is also configured.")]),t._v(" "),e("h2",{attrs:{id:"master-node-reverse-proxy-10-0-0-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#master-node-reverse-proxy-10-0-0-1"}},[t._v("#")]),t._v(" Master node reverse proxy (10.0.0.1)")]),t._v(" "),e("p",[t._v("I use Nginx upstream to reverse proxy traffic to other load nodes (/etc/nginx/nginx.conf), the configuration is as follows:")]),t._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v("events {\n    # This system will automatically select it, optional\n    use epoll;\n    # This sees the maximum connection configured by the machine [sudo ulimit -n # command to view the maximum]\n    worker_connections 65535;\n}\n\n//Mainly add configuration option\nstream{\n  include /etc/nginx/stream.d/*.conf;\n}\n\nhttp{\n  //........\n}\n")])])]),e("p",[t._v("Write the Nginx reverse proxy configuration (/etc/nginx/stream.d/v2ray.conf ), the content is as follows:")]),t._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v("upstream v2ray {\n\n  hash $remote_addr consistent;\n  server 10.0.0.2:10000 weight=5;\n  server 10.0.0.3:10000 weight=5;\n  server 10.0.0.4:10000 weight=5;\n  //.......\n  //The master node continuously forwards the corresponding intranet penetration node according to the average weight\n}\n\n# Suspend TCP reverse proxy service\nserver {\n  # Set up external access to V2ray port\n  # v2ray's clients all request the master node: port 6666, which is then forwarded to the designated intranet node by the node's intranet penetration\n  listen 6666;\n\n  # Here directly forward to the data configuration configured above\n  proxy_pass v2ray;\n}\n")])])]),e("p",[t._v("After completion, start the master node and connect to V2ray to check whether the data can be forwarded correctly.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If there is a firewall, please remember to open the port corresponding to Nginx for access.")])]),t._v(" "),e("h2",{attrs:{id:"common-problem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-problem"}},[t._v("#")]),t._v(" common problem")]),t._v(" "),e("p",[t._v("Q: If the IP of the master node is blocked, how to convert the load node to the master node?\nA: Copy the /etc/tinc/v2ray directory of the master node directly to the available load node (remember to backup), change the public network IP of all nodes /etc/tinc/vpn/hosts/master files to the new node IP, copy Nginx can start the configuration, and open the Tinc or Nginx port at the same time.")]),t._v(" "),e("p",[t._v("Q: Can I participate in the node through a Chinese server?\nA: In the current test, if Chinese server nodes participate in load forwarding, there will be frequent timeouts and stalls. The efficiency is not as good as direct connection to overseas servers, but the speed is faster than WSS+CDN, and the stability is poor.")]),t._v(" "),e("p",[t._v("Q: Can I use a more advanced masquerading protocol instead of TCP?\nA: It can be used but not recommended. Tinc itself is an attached secure data encryption function. A large number of encryption shell processes will cause a sharp drop in performance.")])])}),[],!1,null,null,null);e.default=n.exports}}]);