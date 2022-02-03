import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";
import auth from '@/modules/auth';

Vue.use(Vuex);

const authState = createPersistedState({
	paths:['auth'],
})


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
	async getTree() {
		const mockData = { //get from api
			id: 0,
			name: "вітаємо в службі підтримки дп «інфоресурс»! оберіть, що вас цікавить:",
			description: "",
			attachments: [],
			children: [
				{
					id: 1,
					name: "основні дати",
					description: "",
					attachments: [],
					children: [
						{
							id: 2,
							name: "1 липня",
							description: "реєстрація електронних кабінетів",
							attachments: [],
							children: [],
						},
						{
							id: 3,
							name: "14 липня",
							description: "прийом заяв розпочинається",
							attachments: [],
							children: [],
						},
						{
							id: 4,
							name: "16 липня о 18.00 год",
							description:
								"прийом заяв закінчується (за співбесідою, вступними іспитами, творчими конкурсами)",
							attachments: [],
							children: [],
						},
						{
							id: 5,
							name: "23 липня о 18.00 год",
							description:
								"прийом заяв закінчується (за результатами зно, а також іспитів та творчих конкурсів, які були складені з 01 по 13 липня)",
							attachments: [],
							children: [],
						},
						{
							id: 6,
							name: "1-13 липня (бюджет) 14-23 липня (додаткові сесії контракт)",
							description: "вступні іспити, творчі конкурси",
							attachments: [],
							children: [],
						},
						{
							id: 7,
							name: "17-19 липня (включно)",
							description: "співбесіди проводяться",
							attachments: [],
							children: [],
						},
						{
							id: 8,
							name: "не пізніше 12.00 20 липня",
							description:
								"оприлюдення списків осіб, рекомендованих до зарахування за співбесідою та квотою-2 на бюджет",
							attachments: [],
							children: [],
						},
						{
							id: 9,
							name: "до 10.00 23 липня",
							description:
								"подання заяви про зарахування та квотою-2 на бюджет",
							attachments: [],
							children: [],
						},
						{
							id: 10,
							name: "не пізніше 15.00 23 липня",
							description:
								"зарахування на бюджет та за квотою-2 на бюджет",
							attachments: [],
							children: [],
						},
						{
							id: 11,
							name: "не пізніше 28 липня",
							description:
								"оприлюднення списку рекомендованих на основі результатів зно, творчих конкурсів та вступних іспитів (у тому числі квоту-1, квоту-3, квоту-4)",
							attachments: [],
							children: [],
						},
						{
							id: 12,
							name: "до 18.00 02 серпня",
							description: "подання заяви про зарахування",
							attachments: [],
							children: [],
						},
						{
							id: 13,
							name: "9 серпня",
							description: "зарахування на бюджет",
							attachments: [],
							children: [],
						},
						{
							id: 14,
							name: "не пізніше 30 вересня",
							description: "зарахування контракт",
							attachments: [],
							children: [],
						},
						{
							id: 15,
							name: "не раніше 10 серпня",
							description:
								"надання рекомендацій до зарахування та оприлюднення списку рекомендованих на контракт",
							attachments: [],
							children: [],
						},
					],
				},
				{
					id: 16,
					name: "вибір спеціальності",
					description:
						"для початку радимо ознайомитись з інструкцією у розділі «відеороз’яснення». і введіть ключові слова для пошуку конкурсної пропозиції (освітній ступінь, спеціальність, спеціалізацію, регіон, назву закладу). для вибору перейдіть на сайт: https://vstup.edbo.gov.ua/offers",
					attachments: [],
					children: [],
				},
				{
					id: 18,
					name: "перевірити документ",
					description:
						"для пошуку документа в реєстрі заповніть необхідні поля. поле, що відмічено зірочкою, є обов'язковим. поля «прізвище», «ім’я», «по батькові», «серія» та «номер» документа заповнюються українською мовою згідно з їх написанням у документі: https://info.edbo.gov.ua/edu-documents/",
					attachments: [],
					children: [],
				},
				{
					id: 20,
					name: "інформаційні матеріали",
					description: "",
					attachments: [],
					children: [
						{
							id: 21,
							name: "як обрати спеціальність.",
							description:
								"ми покажемо, як максимально правильно оцінити свої шанси на вступ і обрати саме той заклад освіти, куди ви можете вступити з більшою ймовірністю: https://life.pravda.com.ua/columns/2021/04/28/244766/",
							attachments: [],
							children: [],
						},
						{
							id: 23,
							name: "покрокова інструкція (бакалавр).",
							description:
								"розбираємо типові помилки вступників попередніх років, статуси електронних заяв, як надсилати до приймальної комісії електронні копії документів для заразхування: https://life.pravda.com.ua/columns/2021/06/25/245263/",
							attachments: [],
							children: [],
						},
					],
				},
				{
					id: 25,
					name: "відеороз'яснення",
					description: "",
					attachments: [],
					children: [
						{
							id: 26,
							name: "про що курс",
							description: "https://youtu.be/fmytybxfnpa",
							attachments: [],
							children: [],
						},
						{
							id: 27,
							name: "як обрати спеціальність не виходячи з дому",
							description: "https://youtu.be/onsnz_4wp88",
							attachments: [],
							children: [],
						},
						{
							id: 28,
							name: "як визначитись з предметами зно",
							description: "https://youtu.be/jcpwmpnxjbw",
							attachments: [],
							children: [],
						},
						{
							id: 29,
							name: "що таке конкурсна пропозиція",
							description: "https://youtu.be/gnjvo1fihog",
							attachments: [],
							children: [],
						},
						{
							id: 30,
							name: "як розрахувати конкурсний бал",
							description: "https://youtu.be/s07fvrukzae",
							attachments: [],
							children: [],
						},
						{
							id: 31,
							name: "система коефіцієнтів",
							description: "https://youtu.be/juisfnzneqg",
							attachments: [],
							children: [],
						},
						{
							id: 32,
							name: "пріоритетність при поданні заяв",
							description: "https://youtu.be/ckvbpjp32wg",
							attachments: [],
							children: [],
						},
						{
							id: 33,
							name: "алгоритм розміщення державного замовлення",
							description: "https://youtu.be/w8__zgll_-y",
							attachments: [],
							children: [],
						},
						{
							id: 34,
							name: "пільгові категорії вступників",
							description: "https://youtu.be/6svdo2v4y38",
							attachments: [],
							children: [],
						},
						{
							id: 35,
							name: "що таке мотиваційний лист",
							description: "https://youtu.be/ms-oogedg4m",
							attachments: [],
							children: [],
						},
					],
				},
				{
					id: 36,
					name: "нормативні документи",
					description: "",
					attachments: [],
					children: [
						{
							id: 37,
							name: "зу про освіту",
							description:
								"https://zakon.rada.gov.ua/laws/show/2145-19#text",
							attachments: [],
							children: [],
						},
						{
							id: 38,
							name: "зу про професійну (професійно-технічну) освіту",
							description:
								"https://zakon.rada.gov.ua/laws/show/103/98-вр#text%20",
							attachments: [],
							children: [],
						},
						{
							id: 39,
							name: "зу про фахову передвищу освіту",
							description:
								"https://zakon.rada.gov.ua/laws/show/2745-19#text%20",
							attachments: [],
							children: [],
						},
						{
							id: 40,
							name: "зу про вищу освіту",
							description:
								"https://zakon.rada.gov.ua/laws/show/1556-18%20#text",
							attachments: [],
							children: [],
						},
						{
							id: 41,
							name: "умови прийому на навчання для здобуття вищої освіти в 2021 році",
							description:
								"https://zakon.rada.gov.ua/laws/show/z1225-20#text",
							attachments: [],
							children: [],
						},
						{
							id: 42,
							name: "умови  прийому на навчання до закладів фахової передвищої освіти в 2021 році",
							description:
								"https://zakon.rada.gov.ua/laws/show/z1235-20#text",
							attachments: [],
							children: [],
						},
					],
				},
				{
					id: 43,
					name: "q&a",
					description: "",
					attachments: [],
					children: [
						{
							id: 44,
							name: "порядок надання технічної та інформаційної підтримки для користувачів єдебо",
							description:
								"https://www.inforesurs.gov.ua/edebo/faq/",
							attachments: [],
							children: [],
						},
					],
				},
				{
					id: 45,
					name: "звернутись у службу підтримки",
					description: "vstup@inforesurs.gov.ua",
					attachments: [],
					children: [],
				},
			],
			identifier: "id",
		};

		return new Promise((resolve)=>{
			setTimeout(() => {
				resolve(mockData)
			}, 10);
		})
	},

	async saveTree() {
		// axios.patch('/saveDialog',this.dialog);
		return new Promise((resolve)=>{
			setTimeout(() => {
				resolve(true);
			}, 10);
		});
	},

	downloadJson({commit},tree) {
		console.log(commit);
		const json = JSON.stringify(tree);
		let blob = new Blob([json], {
			type: "application/json",
		}); // 2. Get the blob setting file type in the response object returned by the request. Here is excel as an example.
		let url = window.URL.createObjectURL(blob); // 3. Create a temporary url pointing to the blob object
	
		// 4. After creating the url, you can simulate a series of operations on this file object, for example: preview, download
		let a = document.createElement("a");
		a.href = url;
		a.download = "Dialog Tree.json";
		a.click();
		// 5. Release this temporary object url
		window.URL.revokeObjectURL(url);
	}
  },
  modules: {
	auth,
  },
  plugins: [authState],
})
