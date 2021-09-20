const data = [
	{
		title: `Design Bookstore`,
		image: './assets/images/house_tr.png',
		color: '#f98866',
		description: `Design Bookstore ipsum dolor sit amet consectetur adipisicing elit. Ratione, officiis alias amet ab asperiores, tempora id nihil nam molestiae fugiat magnam commodi. Laboriosam sequi facilis tenetur temporibus deleniti enim ipsum, amet ipsa accusantium eum numquam iste laudantium maxime. Rerum facere eius blanditiis perspiciatis officia voluptates provident. Est velit aliquam vero iusto vel atque, ratione, reiciendis assumenda asperiores harum blanditiis inventore quidem nam non sint natus ipsam voluptate tenetur!`
	},
	{
		title: `Seoul Design Festa`,
		image: './assets/images/house_tr.png',
		color: '#ffbb00',
		description: `
			<p>Seoul Design Festa ipsum dolor sit amet consectetur adipisicing elit. Ratione, officiis alias amet ab asperiores, tempora id nihil nam molestiae fugiat magnam commodi. Laboriosam sequi facilis tenetur temporibus deleniti enim ipsum, amet ipsa accusantium eum numquam iste laudantium maxime. Rerum facere eius blanditiis perspiciatis officia voluptates provident.</p>
			<p>Est velit aliquam vero iusto vel atque, ratione, reiciendis assumenda asperiores harum blanditiis inventore quidem nam non sint natus ipsam voluptate tenetur!</p>`
	},
	{
		title: `Lorem ipsum`,
		image: './assets/images/house_tr.png',
		color: '#80bd9e',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, officiis alias amet ab asperiores, tempora id nihil nam molestiae fugiat magnam commodi. Laboriosam sequi facilis tenetur temporibus deleniti enim ipsum, amet ipsa accusantium eum numquam iste laudantium maxime. Rerum facere eius blanditiis perspiciatis officia voluptates provident. Est velit aliquam vero iusto vel atque, ratione, reiciendis assumenda asperiores harum blanditiis inventore quidem nam non sint natus ipsam voluptate tenetur!`
	},
	{
		title: `Tina's Portfolio`,
		image: './assets/images/house_tr.png',
		color: '#375e97',
		description: `Tina's Portfolio ipsum dolor sit amet consectetur adipisicing elit. Ratione, officiis alias amet ab asperiores, tempora id nihil nam molestiae fugiat magnam commodi. Laboriosam sequi facilis tenetur temporibus deleniti enim ipsum, amet ipsa accusantium eum numquam iste laudantium maxime. Rerum facere eius blanditiis perspiciatis officia voluptates provident. Est velit aliquam vero iusto vel atque, ratione, reiciendis assumenda asperiores harum blanditiis inventore quidem nam non sint natus ipsam voluptate tenetur!`
	},
	{
		title: 'Butter',
		image: './assets/images/house_tr.png',
		color: '#f98866',
		description: `Butter ipsum dolor sit amet consectetur adipisicing elit. Ratione, officiis alias amet ab asperiores, tempora id nihil nam molestiae fugiat magnam commodi. Laboriosam sequi facilis tenetur temporibus deleniti enim ipsum, amet ipsa accusantium eum numquam iste laudantium maxime. Rerum facere eius blanditiis perspiciatis officia voluptates provident. Est velit aliquam vero iusto vel atque, ratione, reiciendis assumenda asperiores harum blanditiis inventore quidem nam non sint natus ipsam voluptate tenetur!`
	},
	{
		title: 'Colo Company',
		image: './assets/images/house_tr.png',
		color: '#ffbb00',
		description: `Colo Company ipsum dolor sit amet consectetur adipisicing elit. Ratione, officiis alias amet ab asperiores, tempora id nihil nam molestiae fugiat magnam commodi. Laboriosam sequi facilis tenetur temporibus deleniti enim ipsum, amet ipsa accusantium eum numquam iste laudantium maxime. Rerum facere eius blanditiis perspiciatis officia voluptates provident. Est velit aliquam vero iusto vel atque, ratione, reiciendis assumenda asperiores harum blanditiis inventore quidem nam non sint natus ipsam voluptate tenetur!`
	},
	{
		title: 'Jeju Island',
		image: './assets/images/house_tr.png',
		color: '#80bd9e',
		description: `Jeju Island ipsum dolor sit amet consectetur adipisicing elit. Ratione, officiis alias amet ab asperiores, tempora id nihil nam molestiae fugiat magnam commodi. Laboriosam sequi facilis tenetur temporibus deleniti enim ipsum, amet ipsa accusantium eum numquam iste laudantium maxime. Rerum facere eius blanditiis perspiciatis officia voluptates provident. Est velit aliquam vero iusto vel atque, ratione, reiciendis assumenda asperiores harum blanditiis inventore quidem nam non sint natus ipsam voluptate tenetur!`
	},
	{
		title: 'Goooogle',
		image: './assets/images/house_tr.png',
		color: '#375e97',
		description: `Goooogle ipsum dolor sit amet consectetur adipisicing elit. Ratione, officiis alias amet ab asperiores, tempora id nihil nam molestiae fugiat magnam commodi. Laboriosam sequi facilis tenetur temporibus deleniti enim ipsum, amet ipsa accusantium eum numquam iste laudantium maxime. Rerum facere eius blanditiis perspiciatis officia voluptates provident. Est velit aliquam vero iusto vel atque, ratione, reiciendis assumenda asperiores harum blanditiis inventore quidem nam non sint natus ipsam voluptate tenetur!`
	},
];

class ProjectView {
	constructor() {
		this.bodyElem = document.createElement('div');
		this.bodyElem.classList.add('cover-panel');
		document.body.appendChild(this.bodyElem);

		this.bodyElem.addEventListener('click', (e) => {
			if(e.target.classList.contains('back-btn')){
				this.hide();
			}
		});
	}

	show(data) {
		document.body.classList.add('scroll-rock');
		this.bodyElem.style.backgroundColor = `${data.color}`
		this.bodyElem.innerHTML = `<section class="project-view">
			<button class="back-btn"><span></span></button>
			<header class="project-view-header">
				<div class="width-setter">
					<h1 class="project-view-title">${data.title}</h1>
				</div>
			</header>
			<div class="project-view-content width-setter">
				<figure class="a11y-hidden-bg project-view-image" style="background-image: url('${data.image}');">
					<img class="a11y-hidden" src="${data.image}" alt="${data.title}">
				</figure>
				<div class="project-view-desc width-setter">
					${data.description}
				</div>
			</div>
		</section>`;

		const timeId = setTimeout(() => {
			this.bodyElem.classList.add('active');
			clearTimeout(timeId);
		}, 10);
	}

	hide() {
		this.bodyElem.classList.add('close');
		const timeId = setTimeout(() => {
			this.bodyElem.classList.remove('active', 'close');
			document.body.classList.remove('scroll-rock');
			clearTimeout(timeId);
		}, 1000);
		
	}
}


let projectView;

let numberOfPanels = 8; //패널 개수
let panelSize = 300; //패널 크기(폭) 
let unitRadian = 2 * Math.PI / numberOfPanels;
let unitDegree = 360 / numberOfPanels

let prevPageYOffset; //이전 스크롤 위치
let scrollDirection; // 스크롤 방향
let currentIndex; //현재 활성화된 프로젝트 번호
let currentPanelElem; //현재 활성화된 패널 요소

let loaderElem;
let panelListElem;
let panelsElem;
let projectListElem;
let panelItemElems;
let observerElems;

function setElems() {
    loaderElem = document.querySelector('.loader-wrapper');
	panelListElem = document.querySelector('.panel-list');
	panelsElem = document.querySelector('.panels');
    panelItemElems = document.querySelectorAll('.panel-item');
    observerElems = document.querySelectorAll('.observer-ready');
	projectListElem = document.querySelector('.project-list');
}

//각 패널들의 회전과 위치 결정
function setPanelItems() {
    //패널 폭은 300px, tan안에 값은 라디안 값으로 써야함
    const dist = (panelSize / 2) / Math.tan(unitRadian / 2) + (panelSize * 0.65); 
    
    for (let i = 0; i < panelItemElems.length; i++){
        panelItemElems[i].style.transform = `rotateY(${unitDegree*i}deg) translateZ(${-dist}px)`;
        panelItemElems[i].style.backgroundColor = data[i].color;
    }
}

window.addEventListener('load', () => {
    setElems();
    loaderElem.addEventListener('transitionend', () => {
        loaderElem.remove();
    })
    document.body.classList.remove('before-load');

    setPanelItems()

	projectView = new ProjectView();

    // IntersectionObserver
    const io = new IntersectionObserver((entries, observer) => {
        //눈에 보이기 시작한 객체 isIntersecting : true;
        //완전히 눈에서 사라진 객체 isIntersecting : false;
        for (let i = 0; i < entries.length; i++ ) {
            if (entries[i].isIntersecting) {

	
                //첫번쨰 프로젝트 처리
                if(entries[i].target.classList.contains('content-observer-start')){
                    currentIndex = 0;
					rotatePanel();
                    continue;
                }

				//*1을 해주면 문자열이 숫자로 바뀜
				const projectIndex = entries[i].target.dataset.projectIndex*1;
				if(projectIndex >= 0) {
					if (scrollDirection === 'up'){
						currentIndex = projectIndex + 1;
					}else {
						currentIndex = projectIndex;						
					}
					if (currentIndex < numberOfPanels) {
						rotatePanel();
					}
				}

				//맨 위로 올라갔을 때
				if (scrollDirection === 'up' && 
					entries[i].target.classList.contains('header-content')
				)
				{
					panelListElem.style.transform = `translateZ(0) rotateY(0deg)`;
					inactivatePanel();
				}

				// 마지막 프로젝트를 지났을 때
				if (
					scrollDirection === 'down' && 
					entries[i].target.classList.contains('content-observer-end')
				)
				{
					panelsElem.classList.add('static-position');
				}
				if (scrollDirection === 'up' && 
					currentIndex === numberOfPanels - 1){
					panelsElem.classList.remove('static-position');
				}
            }
        }
        // console.log(currentIndex);
    });

    observerElems.forEach((item, i) => {
        io.observe(item);
    });

	function inactivatePanel() {
		if(currentPanelElem){
			currentPanelElem.classList.remove('active');
		}
	}

	function setCurrentPanel(){
		inactivatePanel();
		currentPanelElem = panelItemElems[currentIndex];
		currentPanelElem.classList.add('active');
	}

	function rotatePanel() {
		panelListElem.style.transform =
			`translateZ(${numberOfPanels*85}px) rotateY(${-unitDegree*currentIndex}deg)`;
		setCurrentPanel()
		}
	
    window.addEventListener('scroll', () => {
        if (prevPageYOffset > window.pageYOffset){
            scrollDirection = 'up';
        }else {
            scrollDirection = 'down';
        }
        prevPageYOffset = window.pageYOffset;
    });

	// for (let i = 0; i < buttonElems.length; i++){
	// 	console.log(buttonElems);
	// 	buttonElems[i].addEventListener('click', () => {
	// 		showProjectView = new ProjectView();
	// 		showProjectView.show(data[i]);
	// 	});
	// }

	projectListElem.addEventListener('click', (e) => {
		if (e.target.classList.contains('project-btn')) {
			projectView.show(data[e.target.dataset.projectIndex]);
		}
	})
});