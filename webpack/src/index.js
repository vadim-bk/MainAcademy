import * as $ from "jquery";
import Post from "./modules/Post";
// import json from "./assets/json.json";
// import xml from "./assets/data.xml";
// import csv from "./assets/data.csv";
import WebpackLogo from "@/assets/webpack-logo";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";

const post = new Post("Webpack Post Title", WebpackLogo);

$("pre").addClass("code").html(post.toString());

// console.log("Post to string:", post.toString());

// console.log("JSON", json);
// console.log("XML", xml);
// console.log("CSV", csv);
