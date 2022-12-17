function createTreeView(menu, currentNode) {
    // TODO: createTreeView 함수를 작성하세요.
    menu.forEach(element => {
      if(element.type === "group") {
        const list = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = element.name;

        const chBox = document.createElement("input");
        chBox.setAttribute("type", "checkbox");

        list.append(chBox, span);
        currentNode.append(list);
        if(element.children) {
          const ul = document.createElement("ul");
          list.append(ul);
          createTreeView(element.children, ul)
        }

      }
      if(element.type === "item") {
        const list = document.createElement("li");
        list.textContent = element.name;
        currentNode.append(list);
      }
    });
}
