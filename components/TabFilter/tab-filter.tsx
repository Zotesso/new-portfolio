import { useEffect } from 'react';
import { TabFloatBar, HorizontalTab } from './tab-filter-style';

interface TabFilter {
  tabs: string[];
  mainColor?: string;
}

function TabFilter(tab: TabFilter) {
  let target: HTMLElement, links: HTMLElement[], colors: string[];

  useEffect(() => {
    target = Array.from(document.getElementsByClassName('bar') as HTMLCollectionOf<HTMLElement>)[0];
    links = Array.from(document.getElementsByClassName("menu-option") as HTMLCollectionOf<HTMLElement>);
    colors = ["#5851d3e5", "#5b55d6", "#5a53dab7", "#5955a8b7", "#6764a3b7", "#504c9cf1"];
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => e.preventDefault());
      links[i].addEventListener("click", mouseenterEffect);
    }
  }, [])

  function mouseenterEffect() {
    for (let i = 0; i < links.length; i++) {
      if (links[i]?.classList.contains("active")) {
        links[i]?.classList.remove("active");
      }
      links[i].style.opacity = "0.7";
    }

    this.classList.add("active");
    this.style.opacity = "1";

    target.style.width = `${this.getBoundingClientRect().width + 50}px`;
    target.style.height = `${this.getBoundingClientRect().height - 12}px`;
    target.style.left = `${this.getBoundingClientRect().left - 25}px`;
    target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    target.style.transform = "none";
  }

  return (
    <section className='w-100 flex justify-center	items-center flex-row mt-12'>
    <HorizontalTab className="horizontal-tab">
      <ul>
        {
          tab.tabs.map((tabName, index) => (
            <li>
              <a
              className="menu-option text-xl mx-8 cursor-pointer z-20 font-regular text-center text-dark font-display"
              href=""
              key={index}>{ tabName }</a>
            </li>
          ))
        }
      </ul>
    </HorizontalTab>
    <TabFloatBar className="bar"/>
    </section>
  );
}

export default TabFilter