import "bootstrap";
import "./index.scss";

import Calc from "./calc";

import Vue from "vue";

let calc = new Calc();

new Vue({
	el: "#app",

	data: {
		name: "",
		hash: ""
	},

	beforeUpdate: function () {
		this.hash = calc.hash(this.name);
	}
});
