INSERT INTO Houses
    (name, address, city, state, zip, img, mortgage, rent)
VALUES
    (${name}, ${address}, ${city}, ${state}, ${zip}, ${img}, ${mortgage}, ${rent});
SELECT * FROM Houses;