INSERT INTO highlight (image, description) VALUES ('fitur-informasi.png', 'Birokrazy memberikan informasi terlengkap tentang apa saja yang harus dipersiapkan, prosedur pengajuan dan tanggung jawab instansi terkait.');
INSERT INTO highlight (image, description) VALUES ('fitur-tracking.png', 'Birokrazy memungkinkan kita untuk memantau sendiri proses pengerjaan dokumen setiap saat.');
INSERT INTO highlight (image, description) VALUES ('fitur-statistik.png', 'Birokrazy memberi kita kesempatan untuk menilai proses pengurusan dokumen, berbagi pengalaman dan informasi terbaru.');

INSERT INTO user (username, password, name, email) VALUES ('admin', 'admin', 'Bimantara Adipramana', 'bimantara.adipramana@momoku.net');
INSERT INTO user (username, password, name, email) VALUES ('user', 'user', 'Pramudya Cokroatmojo', 'pramudya.cokroatmojo@momoku.net');
INSERT INTO user (username, password, name, email) VALUES ('pns', 'pns', 'Bagus Wicaksana', 'bagus.wicaksana@momoku.net');

INSERT INTO user_role(user_id, role) VALUES (1, 'ADMINISTRATOR');
INSERT INTO user_role(user_id, role) VALUES (2, 'USER');
INSERT INTO user_role(user_id, role) VALUES (3, 'OFFICIAL');

INSERT INTO civil_service (unique_name, name, description, rating, reviews) VALUES ('e-ktp', 'KTP Elektronik', 'Kartu tanda penduduk elektronik', 4.2, 21218);
INSERT INTO civil_service (unique_name, name, description, rating, reviews) VALUES ('paspor', 'Paspor Umum', 'Surat Perjalanan keluar negeri untuk umum', 2.4, 11432);
INSERT INTO civil_service (unique_name, name, description, rating, reviews) VALUES ('imb', 'Izin Mendirikan Bangunan (IMB)', 'Untuk bangunan rumah tinggal atau bangunan umum', 3.4, 3213);
INSERT INTO civil_service (unique_name, name, description, rating, reviews) VALUES ('ritel', 'Izin Usaha Ritel', 'Untuk usaha perdagangan barang eceran', 3.8, 5278);

INSERT INTO department (rating, reviews, name, description, telephone, email, opening_hour, address, zip_code, state, latitude, longitude) VALUES(0, 0, 'PTSP Kedaung', 'PTSP Kedaung', 'Jl. Komplek Departemen Agama, Kedaung Kali Angke', '021-112233', 'ptsp-kedaung@jakarta-barat.id', 'Senin - Jumat 09:00 - 17:00', '10011', 'Jakarta Barat', '-6.153593', '106.762150');
INSERT INTO department (rating, reviews, name, description, telephone, email, opening_hour, address, zip_code, state, latitude, longitude) VALUES(0, 0, 'PTSP Kapuk', 'PTSP Kapuk', 'JL. Kapuk Raya, No.1 RT. 002/03', '021-554433', 'ptsp-kapuk@jakarta-utara.id', 'Senin - Jumat 09:00 - 17:00', '10022', 'Jakarta Utara', '-6.131836', '106.747880');
INSERT INTO department (rating, reviews, name, description, telephone, email, opening_hour, address, zip_code, state, latitude, longitude) VALUES(0, 0, 'PTSP Cengkareng Barat', 'PTSP Cengkareng Barat', 'Jl. Utama Raya No.42, Cengkareng', '021-121212', 'ptsp-cengkareng-barat@jakarta-barat.id', 'Senin - Jumat 09:00 - 17:00', '11730', 'Jakarta Barat', '-6.149574', '106.721845');
INSERT INTO department (rating, reviews, name, description, telephone, email, opening_hour, address, zip_code, state, latitude, longitude) VALUES(0, 0, 'PTSP Cengkareng Timur', 'PTSP Cengkareng Timur', 'Jl. Fajar Baru Utara, Cengkareng', '+62 21 6198529', 'ptsp-cengkareng-timur@jakarta-utara.id', 'Senin - Jumat 09:00 - 17:00', '11730', 'Jakarta Barat', '-6.145154', '106.733279');
INSERT INTO department (rating, reviews, name, description, telephone, email, opening_hour, address, zip_code, state, latitude, longitude) VALUES(0, 0, 'PTSP Rawa Buaya', 'PTSP Rawa Buaya', 'Jl. Bojong Raya No. 48M, RT 05 RW 04, Rawa Buaya', '021-983426', 'ptsp-rawa-buaya@jakarta-barat.id', 'Senin - Jumat 09:00 - 17:00', '11740', 'Jakarta Barat', '-6.170794', '106.731184');
INSERT INTO department (rating, reviews, name, description, telephone, email, opening_hour, address, zip_code, state, latitude, longitude) VALUES(0, 0, 'PTSP Duri Kosambi', 'PTSP Duri Kosambi', 'Jl. Raya Duri Kosambi, Cengkareng', '021-787878', 'ptsp-rawa-buaya@jakarta-barat.id', 'Senin - Jumat 09:00 - 17:00', '11740', 'Jakarta Barat', '-6.170794', '106.731184');


INSERT INTO review (create_date, user_id, civil_service_id, revlike, dislike, rating, department_id, subject, content ) VALUES (NOW(), 2, 1, 2155, 92, 4.7, 1, 'Great Work', 'Lorem ipsum dolor sit amet, #transparan adipiscing elit. Phasellus eget erat at leo interdum imperdiet id nec quam. Ut sollicitudin ex sit amet nisl faucibus facilisis. Pellentesque tempus, lacus a tincidunt diam, id #sopan nisl nulla nec metus. .');
INSERT INTO review (create_date, user_id, civil_service_id, revlike, dislike, rating, department_id, subject, content ) VALUES (NOW(), 2, 1, 1091, 13, 3.1, 1, 'Not Bad', 'Lorem ipsum dolor sit amet, #transparan adipiscing elit. Phasellus eget erat at leo interdum imperdiet id nec quam. Ut sollicitudin ex sit amet nisl faucibus facilisis. Pellentesque tempus, lacus a tincidunt diam, id #sopan nisl nulla nec metus. ');
INSERT INTO review (create_date, user_id, civil_service_id, revlike, dislike, rating, department_id, subject, content ) VALUES (NOW(), 2, 2, 3811, 8, 3.5, 2, 'Great Work', 'Lorem ipsum dolor sit amet, #transparan adipiscing elit. Phasellus eget erat at leo interdum imperdiet id nec quam. Ut sollicitudin ex sit amet nisl faucibus facilisis. Pellentesque tempus, lacus a tincidunt diam, id #sopan nisl nulla nec metus. ');
INSERT INTO review (create_date, user_id, civil_service_id, revlike, dislike, rating, department_id, subject, content ) VALUES (NOW(), 2, 2, 865, 155, 2.8, 2, 'Not Bad', 'Lorem ipsum dolor sit amet, #transparan adipiscing elit. Phasellus eget erat at leo interdum imperdiet id nec quam. Ut sollicitudin ex sit amet nisl faucibus facilisis. Pellentesque tempus, lacus a tincidunt diam, id #sopan nisl nulla nec metus. ');
INSERT INTO review (create_date, user_id, civil_service_id, revlike, dislike, rating, department_id, subject, content ) VALUES (NOW(), 2, 3, 1791, 197, 2.0, 3, 'Great Work', 'Lorem ipsum dolor sit amet, #transparan adipiscing elit. Phasellus eget erat at leo interdum imperdiet id nec quam. Ut sollicitudin ex sit amet nisl faucibus facilisis. Pellentesque tempus, lacus a tincidunt diam, id #sopan nisl nulla nec metus. ');
INSERT INTO review (create_date, user_id, civil_service_id, revlike, dislike, rating, department_id, subject, content ) VALUES (NOW(), 2, 3, 7169, 51, 3.9, 3, 'Not Bad', 'Lorem ipsum dolor sit amet, #transparan adipiscing elit. Phasellus eget erat at leo interdum imperdiet id nec quam. Ut sollicitudin ex sit amet nisl faucibus facilisis. Pellentesque tempus, lacus a tincidunt diam, id #sopan nisl nulla nec metus. ');
INSERT INTO review (create_date, user_id, civil_service_id, revlike, dislike, rating, department_id, subject, content ) VALUES (NOW(), 2, 4, 985, 67, 4.5, 4, 'Great Work', 'Lorem ipsum dolor sit amet, #transparan adipiscing elit. Phasellus eget erat at leo interdum imperdiet id nec quam. Ut sollicitudin ex sit amet nisl faucibus facilisis. Pellentesque tempus, lacus a tincidunt diam, id #sopan nisl nulla nec metus. ');
INSERT INTO review (create_date, user_id, civil_service_id, revlike, dislike, rating, department_id, subject, content ) VALUES (NOW(), 2, 4, 3313, 109, 3.3, 4, 'Not Bad', 'Lorem ipsum dolor sit amet, #transparan adipiscing elit. Phasellus eget erat at leo interdum imperdiet id nec quam. Ut sollicitudin ex sit amet nisl faucibus facilisis. Pellentesque tempus, lacus a tincidunt diam, id #sopan nisl nulla nec metus. ');

INSERT INTO review_statement (create_date, user_id, review_id, revlike, dislike, content) VALUES (NOW(), 3, 2, 156, 9, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam quis ligula eget purus vestibulum mattis. Proin eget massa nulla. In ultrices maximus sem sed consectetur. Aliquam id erat nec mi luctus iaculis a vel est.');
INSERT INTO review_statement (create_date, user_id, review_id, revlike, dislike, content) VALUES (NOW(), 3, 4, 79, 13, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam quis ligula eget purus vestibulum mattis. Proin eget massa nulla. In ultrices maximus sem sed consectetur. Aliquam id erat nec mi luctus iaculis a vel est.');
INSERT INTO review_statement (create_date, user_id, review_id, revlike, dislike, content) VALUES (NOW(), 3, 6, 289, 11, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam quis ligula eget purus vestibulum mattis. Proin eget massa nulla. In ultrices maximus sem sed consectetur. Aliquam id erat nec mi luctus iaculis a vel est.');
INSERT INTO review_statement (create_date, user_id, review_id, revlike, dislike, content) VALUES (NOW(), 3, 8, 79, 2, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam quis ligula eget purus vestibulum mattis. Proin eget massa nulla. In ultrices maximus sem sed consectetur. Aliquam id erat nec mi luctus iaculis a vel est.');