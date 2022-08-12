const f = () => {
	const nodes = document.body.childNodes;

	const f = (nodes, texts) => {
		let buf = [];
		for (let e of nodes) {
			const nodeName = e.nodeName.toLowerCase();
			if (nodeName !== "#text" && e.getAttribute('data-text') === "true") {
				continue;
			}
			if (nodeName === "script" || nodeName === "meta" || nodeName === "link" || nodeName === "style") {
				continue;
			}
			if (e.childNodes.length === 0) {
				if (nodeName === "#text") {
					buf.push(e);
				}
				continue;
			}
			const ret = f(e.childNodes, texts);
			buf = buf.concat(ret);
		}
		return buf;
	};

	const texts = f(nodes, []);
	for (let e of texts) {
		if (e.textContent.trim() === "") {
			continue;
		}
		if (e.priconneNanoExtension) {
			continue;
		}
		e.priconneNanoExtension = true;

		e.textContent = e.textContent
			.replaceAll(/(?<=\S+)([!！?？。])/g, "なの$1") // 行末が記号
			.replaceAll(/(?<=[^!！?？。\n])(\n)/g, "なの$1") // 行末が改行
			.replaceAll(new RegExp(`([^…!！?？。\n${decodeURIComponent('%C2%B7')}])$`, "g"), "$1なの"); // 末尾に改行も記号もない1行 (三点リーダーは省略されたリンク用、デコードした文字はdmの発言者の区切り文字用)
	}
};

setInterval(f, 1000);

