INSERT INTO highlight (title, description) VALUES ('Title 1', 'Description one donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.');
INSERT INTO highlight (title, description) VALUES ('Title 2', 'Description two donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.');
INSERT INTO highlight (title, description) VALUES ('Title 3', 'Description three donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.');

INSERT INTO user (username, password, name, email) VALUES ('admin', 'admin', 'Bimantara Adipramana', 'bimantara.adipramana@momoku.net');
INSERT INTO user (username, password, name, email) VALUES ('user', 'user', 'Pramudya Cokroatmojo', 'pramudya.cokroatmojo@momoku.net');
INSERT INTO user (username, password, name, email) VALUES ('pns', 'pns', 'Bagus Wicaksana', 'bagus.wicaksana@momoku.net');

INSERT INTO user_role(user_id, role) VALUES (1, 'ADMINISTRATOR');
INSERT INTO user_role(user_id, role) VALUES (2, 'STANDARD');
INSERT INTO user_role(user_id, role) VALUES (3, 'OFFICIAL');