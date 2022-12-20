function findMatryoshka(matryoshka, size) {
    // TODO: 여기에 코드를 작성합니다.
    if(!Object.keys(matryoshka).length) return false;
    if(matryoshka.size === size) return true;
    
    if(matryoshka.matryoshka === null) return false;
  
    return findMatryoshka(matryoshka.matryoshka, size);
  }
  