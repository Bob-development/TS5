import { Component, AdvancedComponent } from "../core/Component";
import { append, appendMany } from "../core/append";

import './style.css'

const app = document.querySelector("#app") as HTMLElement;

const userData = new Component({
  className: 'user-data',
  children: [
    new AdvancedComponent({
      tagName: 'input',
      className: 'userName-input',
      placeholder: 'Name'
    }),

    new AdvancedComponent({
      tagName: 'input',
      className: 'userPassword-input',
      placeholder: 'Password'
    }),

    new AdvancedComponent({
      tagName: 'select',
      className: 'gender-selctor',
      children: [
        new AdvancedComponent({
          tagName: 'option',
          value: 'male',
          textContent: 'Male'
        }),

        new AdvancedComponent({
          tagName: 'option',
          value: 'female',
          textContent: 'Female'
        })
      ]
    }),

    new AdvancedComponent({
      tagName: 'div',
      textContent: 'Ready'
    }),

    new AdvancedComponent({
      tagName: 'input',
      className: 'ready-checkbox',
      type: 'checkbox'
    })
  ]
})

const listTitle = new AdvancedComponent({
  tagName: 'div',
  className: 'title-list',
  textContent: 'L i s t'
})

const listWrapper = new AdvancedComponent({
  tagName: 'div',
  className: 'list-wrapper'
})

const btnsWrapper = new Component({
  className: 'btns-wrapper',
  children: [
    new AdvancedComponent({
      tagName: 'button',
      id: 'addBtn',
      textContent: 'Add',
    }),

    new AdvancedComponent({
      tagName: 'button',
      id: 'removeBtn',
      textContent: 'Remove',
    })
  ]
})

appendMany(app, [btnsWrapper, userData, listTitle, listWrapper]);


const addBtn = document.querySelector('#addBtn');
const deleteBtn = document.querySelector('#removeBtn');
const peopleList = document.querySelector(".list-wrapper");
const nameInput = document.querySelector('.userName-input');
const passInput = document.querySelector('.userPassword-input');
const genderSelector = document.querySelector('.gender-selctor');
const readyCheckbox = document.querySelector('.ready-checkbox');



addBtn.addEventListener('click', ()=>{
  const personWrapper = new Component({
    tagName: 'div',
    className: 'person-wrapper',
    children: [
      new AdvancedComponent({
        tagName: 'input',
        className: 'is-user-chosen',
        type: 'checkbox'
      }),

      new AdvancedComponent({
        tagName: 'div',
        className: 'user-name',
        textContent: nameInput.value
      }),

      new AdvancedComponent({
        tagName: 'div',
        className: 'user-pass',
        textContent: passInput.value
      }),

      new AdvancedComponent({
        tagName: 'div',
        className: 'user-gender',
        textContent: genderSelector.value
      }),

      new AdvancedComponent({
        tagName: 'div',
        className: 'was-user-ready',
        textContent: isReady(readyCheckbox.checked)
      })
    ]
  })

  append(peopleList, personWrapper);
})

deleteBtn.addEventListener('click', ()=>{  
  for(const child of [...peopleList.children]){        
    const chooseCheckbox = child.querySelector('.is-user-chosen');
    const isChecked = chooseCheckbox.checked;

    if(isChecked){      
      peopleList.removeChild(child);
    }    
  }
})



function isReady(checkbox){
  if(checkbox){
    return 'Ready!'
  } else return 'Not now :('
}