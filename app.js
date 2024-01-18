let pronoun = ['the', 'our','my', 'their', 'her', 'his', 'your'];
let adj = ['great', 'big', 'amazing', 'awesome', 'ultimate', 'LAST', 'best'];
let noun = ['sitcom', 'mystic', 'planet', 'scenario', 'cyborg', 'whises', 'ofus'];
let extension = ['com', 'es', 'net', 'org', 'us', 'co.uk', 'io'];

let domain = '';
let counter = 1;
for (let i=0; i<pronoun.length; i++){
    for (let j=0; j<adj.length; j++){
        for (let k=0; k<noun.length; k++){
            for (let l=0; l<extension.length; l++){
                domain = pronoun[i]+adj[j]+noun[k];
                if (domain.endsWith(extension[l])){
                    domain = domain.slice(0,-extension[l].length);
                    domain += '.'+extension[l];
                }
                else {
                    domain+= '.'+extension[l];
                }
                console.log(counter+' '+domain);
                counter++;
            }
        }
    }
}