INSERT INTO types(category,img) VALUES('FOOD','https://png.pngtree.com/svg/20170208/be6783b29c.png');
INSERT INTO types(category,img) VALUES('TRANSPORT','https://cdn4.iconfinder.com/data/icons/transportation-lineal-color-set-version-two/512/Transport_Bus_Lineal_Color-512.png');
INSERT INTO types(category,img) VALUES('BILLS','https://image.flaticon.com/icons/png/512/1365/1365895.png');
INSERT INTO types(category,img) VALUES('ENTERTAINMENT','https://cdn1.iconfinder.com/data/icons/news-and-media-solid-the-world-today/512/Entertainment_News-512.png');
INSERT INTO types(category,img) VALUES('OTHERS','/kaching.png');
INSERT INTO types(category,img) VALUES('KACHING','https://cdn4.iconfinder.com/data/icons/emoji-filled-line/32/emoji-icon-color-01-512.png');

INSERT INTO expenses(users_id,types_id,amount,description) VALUES(4,1,2.50,'LUNCH-CHICKEN RICE');
INSERT INTO expenses(users_id,types_id,amount,description) VALUES(4,2,'$1.25','MRT + BUS');
INSERT INTO expenses(users_id,types_id,amount,description) VALUES(4,3,'$75','STARHUB');
INSERT INTO expenses(users_id,types_id,amount,description) VALUES(4,4,'$11.90','MOVIE');
INSERT INTO expenses(users_id,types_id,amount,description) VALUES(4,5,'$20','OWE FRIEND');