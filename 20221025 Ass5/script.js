/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem {
        id;
        name;
        desc;
        genre;

        constructor(id, name, desc, genre) {
            this.id = id;
            this.name = name;
            this.desc = desc;
            this.genre = genre;
        }
        
        updateContentItem(id, name, desc, genre) {
            if(id = ContentItem.id && (name != null || desc != null || genre !=null)) {
                ContentItem.name = name;
                ContentItem.desc = desc;
                ContentItem.genre = genre;
            }
        }

        toString(id, name, desc, genre) {
            return "<div class='content-item-wrapper' id='content-item-" + this.id + "'>" +
                   "<h2>" + this.name + "</h2>" + 
                   "<p>" + this.desc + "</p>" +
                   "<div>" + this.genre + "</div>" +
                   "</div>";
        }
    }

    let kpopgroups = [new ContentItem('0', 'Dreamcatcher', 'This is a girl group formed by HappyFace Entertainment (now Dreamcatcher Company). The group consists of seven members: JiU, SuA, Siyeon, Handong, Yoohyeon, Dami and Gahyeon. They made their official debut on January 13, 2017, with the single album Nightmare.', 'Rock'),
                      new ContentItem('1', 'Stray Kids', 'This is a boy band formed by JYP Entertainment through a 2017 reality show of the same name. The group is composed of eight members: Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, and I.N. Originally a nine-piece group, member Woojin left due to undisclosed personal reasons in October 2019. Stray Kids released their pre-debut extended play (EP) Mixtape in January 2018 and officially debuted on March 25 with the EP I Am Not.', 'Electronica'),
                      new ContentItem('2', '(G)I-dle', 'This is a girl group formed by Cube Entertainment. The group consists of five members: Miyeon, Minnie, Soyeon, Yuqi and Shuhua. Originally a sextet, Soojin left the lineup on August 14, 2021. (G)I-dle debuted on May 2, 2018, with the single "Latata" from their first extended play (EP) I Am.', 'Hip Hop'),
                      new ContentItem('3', 'IVE', 'This is a girl group formed by Starship Entertainment. The group is composed of six members: Yujin, Gaeul, Rei, Wonyoung, Liz and Leeseo. They made their debut on December 1, 2021, with the single album Eleven', 'Pop'),
                      new ContentItem('4', 'STAYC', 'This is a girl group formed by High Up Entertainment. The group is composed of six members: Sumin, Sieun, Isa, Seeun, Yoon, and J. They debuted on November 12, 2020, with the release of their debut single album Star to a Young Culture.', 'Pop'),
                     ];
    
    kpopgroups.forEach(ContentItem => {
        $("#content-item-list").append(ContentItem.toString());
    });

    let wrapper = document.getElementsByClassName('content-item-wrapper');

    $(".content-item-wrapper").css({"border": "1px solid black", 
                                    "width": "80%",
                                    "padding": "5%",
                                    "margin": "0 auto",
                                    "margin-top": "2%", });

});


