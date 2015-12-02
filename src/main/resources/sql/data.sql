INSERT INTO highlight (image, description) VALUES ('fitur-informasi.png', 'Birokrazy memberikan informasi terlengkap tentang apa saja yang harus dipersiapkan, prosedur pengajuan dan tanggung jawab instansi terkait.');
INSERT INTO highlight (image, description) VALUES ('fitur-tracking.png', 'Birokrazy memungkinkan kita untuk memantau sendiri proses pengerjaan dokumen setiap saat.');
INSERT INTO highlight (image, description) VALUES ('fitur-statistik.png', 'Birokrazy memberi kita kesempatan untuk menilai proses pengurusan dokumen, berbagi pengalaman dan informasi terbaru.');

INSERT INTO user (username, password, name, email) VALUES ('admin', 'admin', 'Bimantara Adipramana', 'bimantara.adipramana@momoku.net');
INSERT INTO user (username, password, name, email) VALUES ('user', 'user', 'Pramudya Cokroatmojo', 'pramudya.cokroatmojo@momoku.net');
INSERT INTO user (username, password, name, email) VALUES ('pns', 'pns', 'Bagus Wicaksana', 'bagus.wicaksana@momoku.net');

INSERT INTO user_role(user_id, role) VALUES (1, 'ADMINISTRATOR');
INSERT INTO user_role(user_id, role) VALUES (2, 'USER');
INSERT INTO user_role(user_id, role) VALUES (3, 'OFFICIAL');