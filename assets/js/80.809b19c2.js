(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{382:function(t,e,a){"use strict";a.r(e);var s=a(10),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"transparent-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transparent-proxy"}},[t._v("#")]),t._v(" Transparent Proxy")]),t._v(" "),e("p",[t._v("Here, V2Ray is used as a transparent proxy which allows you to access blocked websites for all the devices in a LAN, as some people called a router proxy. However, we would rather call it a gateway proxy than a router proxy. Certainly, using only a home router as a gateway proxy is possible since most home routers can behave as a gateway. Once it is configured as the gateway proxy, all devices in the LAN can have access to censored websites. Gateway proxy can also act as a global proxy, saving you from having to install V2Ray on each device. When the configuration is updated, you only need to modify the setting at the gateway. Some people say it feels like there is no blocking wall at all. Nonetheless, we advise one evaluate its network environment first before blindly deploying transparent proxy V2Ray.")]),t._v(" "),e("p",[t._v("The transparent proxy is befitting for the following situations:")]),t._v(" "),e("ul",[e("li",[t._v("You have many LAN devices in your local network, such as offices, laboratories, and large families.")]),t._v(" "),e("li",[t._v("Your device(s) can't conveniently set up a proxy on their own, such as Chromecast, TV box, etc.")]),t._v(" "),e("li",[t._v("You want all the traffic on your device(s) to access the internet via a proxy.")])]),t._v(" "),e("h2",{attrs:{id:"pros"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pros"}},[t._v("#")]),t._v(" Pros")]),t._v(" "),e("p",[t._v("In fact, V2Ray has been supported as a transparent proxy for some time. However, due to some DNS problem, it was not very convenient at that time. It's, however, a different story now. Because V2Ray as a transparent proxy can:")]),t._v(" "),e("ol",[e("li",[t._v("Solve DNS pollution to blocked domains by the Great Firewall;")]),t._v(" "),e("li",[t._v("Deal not only DNS pollution mentioned above but also in the meantime resolve Chinese domains using Chinese CDN;")]),t._v(" "),e("li",[t._v("Eliminate the 1 and 2 issues without the need for external software or self-built DNS, as long as the system supports V2Ray and iptables;")]),t._v(" "),e("li",[t._v("Take advantage of V2Ray's powerful and flexible routing feature without maintain a routing table;")])]),t._v(" "),e("h2",{attrs:{id:"preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[t._v("#")]),t._v(" Preparation")]),t._v(" "),e("ul",[e("li",[t._v("Someone who's capable to solve problems in their own situations;")]),t._v(" "),e("li",[t._v("A VPS that has installed V2Ray, the IP of which we assume to be "),e("code",[t._v("110.231.43.65")]),t._v(";")]),t._v(" "),e("li",[t._v("A device with iptables, root permission, and Linux system, the IP of which we assume to be "),e("code",[t._v("192.168.1.22")]),t._v(", with V2Ray running as a client. This device can be a router, a development board, a personal computer, a virtual machine, or an Android device, referred to a gateway here. We do not recommend using the MT7620 system to deploy as a transparent proxy, due to its limited performance, and the fact that many of their firmware does not have access to FPU. If you are not willing to purchase a new device specifically for transparent proxy, you can, however, create a virtual machine on your PC (e.g. VirtualBox, Hyper-V, and KVM). Note that on the hypervisor, you should set virtual machines' network in bridge mode.")])]),t._v(" "),e("h2",{attrs:{id:"procedures"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#procedures"}},[t._v("#")]),t._v(" Procedures")]),t._v(" "),e("p",[t._v("The setup steps are as follows, assuming you are logged in with root.")]),t._v(" "),e("ol",[e("li",[t._v("Enable IP forwarding on the gateway device: Add new line "),e("code",[t._v("net.ipv4.ip_forward=1")]),t._v(" to the /etc/sysctl.conf file and execute :")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sysctl -p\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("The gateway device sets to a static IP, which is in the same network segment as the LAN port of the router. The default gateway should be the IP address of the router. Enter the router management page and go to the DHCP setting, set the default gateway address at the IP address of the gateway device, as 192.168.1.22 in this example. Or you can set your computer, phone and other devices their default gateway individually (to 192.168.1.22), and reconnect your devices to the router to see if they can connect to the Internet. (It's normal that the device can not yet bypass the GFW at this time). If the devices have no access to the internet at all, you'll have to solve this issue first before going any further. Otherwise, you'll only waste your time following the next steps. The gateway device is set to a static IP so that to its IP does not change after a reboot. The default gateway on the router is set to the gateway IP address so that the router routes all data sent from the LAN devices connected to it to the gateway device, who then forwards the traffic using V2Ray.")])]),t._v(" "),e("li",[e("p",[t._v('Install the latest version of V2Ray on the server  (your VPS) and the gateway. (If you don\'t how then you need to follow the previous tutorials. Note that GFW likes to intercept the GitHub releases traffic, and it can cause failure to install V2Ray using the installation script. It is hence advised to download the V2Ray package manually, and then use the installation script with the "-local" parameter.) Configure your config file accordingly. When you are sure that the V2Ray is working properly, at the gateway, execute '),e("code",[t._v("curl -x socks5://127.0.0.1:1080 google.com")]),t._v(" to test whether your setup can bypass GFW. (Here socks5 refers to the inbound protocol and "),e("code",[t._v("1080")]),t._v(" is the inbound port ) . If the output is something like the following, you are good. Otherwise, there's something wrong with your setup and you need to recheck what you have missed.\n")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">\n<TITLE>301 Moved</TITLE></HEAD><BODY>\n<H1>301 Moved</H1>\nThe document has moved\n<A HREF="http://www.google.com/">here</A>.\n</BODY></HTML>\n')])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("In the configuration file of the gateway, add the inbound configuration of the dokodemo-door protocol, enable sniffing, and add also SO_MARK to all outbound streamSettings. The configuration should be as follows (the "),e("code",[t._v("...")]),t._v(" represents configuration in a standard client):")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The open port")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dokodemo-door"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp,udp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followRedirect"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Need to be set as true to accept traffic from iptables")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sniffing"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destOverride"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ...\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sockopt"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mark"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here is SO_MARK，used for iptables to recognise. Each outbound needs to configure; you can use other value other than 255 but it needs to be consistant as in iptables rules; if there are multiple outbounds, it is recommended that you set all SO_MARK value the same for all outbounds.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Set iptable rules for TCP for the transparent proxy device: (after "),e("code",[t._v("#")]),t._v(" are comments):")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("iptables "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" nat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-N")]),t._v(" V2RAY "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a new chain called V2RAY")]),t._v("\niptables "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" nat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v(" V2RAY "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/16 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-j")]),t._v(" RETURN "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Direct connection 192.168.0.0/16")]),t._v("\niptables "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" nat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v(" V2RAY "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-j")]),t._v(" RETURN "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" mark "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--mark")]),t._v(" 0xff "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Directly connect SO_MARK to 0xff traffic (0xff is a hexadecimal number, numerically equivalent to 255), the purpose of this rule is to avoid proxy loopback with local (gateway) traffic")]),t._v("\niptables "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" nat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v(" V2RAY "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-j")]),t._v(" REDIRECT --to-ports "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The rest of the traffic is forwarded to port 12345 (ie V2Ray)")]),t._v("\niptables "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" nat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v(" PREROUTING "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-j")]),t._v(" V2RAY "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Transparent proxy for other LAN devices")]),t._v("\niptables "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" nat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v(" OUTPUT "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-j")]),t._v(" V2RAY "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Transparent proxy for this machine")]),t._v("\n")])])]),e("p",[t._v("Then set the iptables rule of UDP traffic for the transparent proxy device:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ip rule add fwmark 1 table 100\nip route add local 0.0.0.0/0 dev lo table 100\niptables -t mangle -N V2RAY_MASK\niptables -t mangle -A V2RAY_MASK -d 192.168.0.0/16 -j RETURN\niptables -t mangle -A V2RAY_MASK -p udp -j TPROXY --on-port 12345 --tproxy-mark 1\niptables -t mangle -A PREROUTING -p udp -j V2RAY_MASK\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[e("p",[t._v("Try visiting a blocked website directly using your computer/phone that are connected under the same LAN with your configured transparent proxy device. You should not be blocked by now.")])]),t._v(" "),e("li",[e("p",[t._v("You might need a script or anything (such as iptables-persistent) that can automatically load the above iptable rules after the transparent proxy device reboots. Otherwise, the iptables will be lost after it reboots.")])])]),t._v(" "),e("h2",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),e("ul",[e("li",[t._v("WIth the above setup, when you visit a normally blocked site, the gateway will still use the system DNS for the query, except that the returned result is polluted. But the sniffing provided by V2Ray can learn the domain name (of the polluted website) from the traffic and send it for your VPS to resolve, returning the correct result. This is to say that every time you visit a blocked website by the GFW, despite the fact that you can bypass the censorship with V2Ray, your system DNS provider (who pollutes your DNS) knows that you have tried to visit the blocked website. Hence you need to be aware of the possibility that they could actively collect such data.")]),t._v(" "),e("li",[t._v("V2Ray sniffing currently only extracts domain names from TLS and HTTP traffic. If there is traffic that is neither type of the two, be cautious of using sniffing to solve DNS pollution.")]),t._v(" "),e("li",[t._v("There might be some problems with the transparent proxy rule for UDP traffic. It will be thankful if you would like to give us any feedback regarding those rules. If your online activities involve simply web surfing or watching videos, TCP rules only might be sufficient without the need of configuring UDP rules.")]),t._v(" "),e("li",[t._v("Due to the limit of VMESS protocol, V2Ray transparent proxy would not offer satisfactory online gaming performance.")]),t._v(" "),e("li",[t._v("Only TCP/UDP traffic can be proxied via V2Ray, so it does not work with ICMP packets. Therefore, the transparent proxy does not support ping/mtr which is based on ICMP. However, tcping or hping3 works as they use TCP instead of ICMP.")]),t._v(" "),e("li",[t._v("There are some transparent proxy tutorials on the internet that set iptables rules for private addresses like RETURN 127.0.0.0/8, but we suggest they should be placed in the V2Ray routing rules for performance reason.")])]),t._v(" "),e("hr"),t._v(" "),e("h4",{attrs:{id:"updates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[t._v("#")]),t._v(" Updates")]),t._v(" "),e("ul",[e("li",[t._v("2017-12-05 Initial Version.")]),t._v(" "),e("li",[t._v("2017-12-24 Fix a problem of visiting non-blocked sites.")]),t._v(" "),e("li",[t._v("2017-12-27 re-format.")]),t._v(" "),e("li",[t._v("2017-12-29 Removed unnecessary iptables rules.")]),t._v(" "),e("li",[t._v("2018-01-16 Optimized set up steps.")]),t._v(" "),e("li",[t._v("2018-01-21 Add UDP transparent proxy setting")]),t._v(" "),e("li",[t._v("2018-04-05 Update")]),t._v(" "),e("li",[t._v("2018-08-30 Fix setting up procedures.")]),t._v(" "),e("li",[t._v("2018-09-14 improved local requests.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);