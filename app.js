let pronoun = ['the', 'our','my', 'their', 'her', 'his', 'your', 'a', ];
let adj = ['great', 'big', 'amazing', 'awesome', 'ultimate'];
let noun = ['jogger', 'racoon', 'squirrel', 'grizzly', 'otter', 'beaver'];
let extension = ['.com', '.es', '.net', '.org', '.us', '.co.uk', '.io'];

let domain = '';
let counter = 1;
for (let i=0; i<pronoun.length; i++){
    for (let j=0; j<adj.length; j++){
        for (let k=0; k<noun.length; k++){
            for (let l=0; l<extension.length; l++){
                console.log(counter+' '+pronoun[i]+adj[j]+noun[k]+extension[l]);
                counter++;
            }
        }
    }
}