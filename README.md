# Test técnico para Galilea :house:
Este repositorio tiene tres carpetas, las cuales contienen lo siguiente:
* Frontend-buttons: Botones desarrollados en NextJS, donde se encuentra el componente *NumberInput* que recibe los parámetros ```{ value, max, min, softMin, softMax, step }```. Dentro de la carpeta se encuentran las instrucciones para ver la página web.
* Lógica: Función *Compute25* desarrollada en Javascript en el archivo ```compute25.mjs```. Dentro del mismo archivo fueron testeados todos los casos descritos en ```tests.mjs```. Cabe destacar que gran parte del código fue basado de este [repositorio](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/challenges/english/10-coding-interview-prep/rosetta-code/24-game.md).
* SQL: Resolución del problema en Python (con la librería *pandas*) dentro del archivo ```main.py```. Las bases de datos en formato *csv* están en la carpeta *data*. La consulta equivalente es la siguiente:

```bash
SELECT m.id, m.name, q.quantity FROM (
    SELECT c.material_id, c.quantity - p.quantity - (r.quantity - CASE WHEN t.quantity IS NULL 0 THEN t.quantity) AS quantity
    FROM cubicated_quantities_df AS c
    INNER JOIN released_quantities_df AS r
    ON r.material_id = c.material_id 
    INNER JOIN purchase_df AS p
    ON p.material_id = c.material_id
    RIGHT JOIN ticket_details_df AS t
    ON t.material_id = c.material_id
) AS q
INNER JOIN material_df AS m
ON m.material_id = q.material_id
```