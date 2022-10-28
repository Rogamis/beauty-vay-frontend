import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import prod1 from "../../images/products/prod1.jpg";
import prod2 from "../../images/products/prod2.jpg";
import prod3 from "../../images/products/prod3.jpg";  
import prod4 from "../../images/products/prod4.jpg";  
import prod5 from "../../images/products/prod5.jpg";
import prod6 from "../../images/products/prod6.jpg";
import prod7 from "../../images/products/prod7.jpg";
import prod8 from "../../images/products/prod8.jpg";
import prod9 from "../../images/products/prod9.jpg";
import prod10 from "../../images/products/prod10.jpg";
import prod11 from "../../images/products/prod11.jpg";
import prod12 from "../../images/products/prod12.jpg";
import prod13 from "../../images/products/prod13.jpg";
import prod14 from "../../images/products/prod14.jpg";
import prod15 from "../../images/products/prod15.jpg";
import prod16 from "../../images/products/prod16.jpg";
import prod17 from "../../images/products/prod17.jpg";

export default function AllProductsGrid() {
  return (
    <Box sx={{ margin: 18 }}>
      <Grid
        container
        direction="raw"
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="stretch"
      >
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="40" image={prod1} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TOPFACE BB SKIN EDITOR MATTE FINISH
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Тональный крем.
              <ul>
                <li>Об'єм: 30ml </li>
                <li>Класифікація: мас маркет</li>
                <li>Країна ТМ: Туреччина</li>
                <li>Зроблено в: Туреччина</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 275 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod2} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              "BOUNTY" TOP BEAUTY
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Органічний скраб для обличчя і тіла з кокосовою олією
              <ul>
                <li>Виробник Top Beauty</li>
                <li>Об`єм 250 мл</li>
                <li>
                  Для механічного пілінгу Область застосування   Обличчя, Тіло
                </li>
                <li>Тип шкіри   Всі типи шкіри</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 175 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod4} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Top Beauty Пінка з щіткою
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Пінка для вмивання для проблемної шкіри з акне
              <ul>
                <li>Об'єм: 150 ml </li>
                <li>Пробіотик біолін</li>
                <li>Екстракт ромашки та розмарину</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 180 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod5} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SOS-гель top beauty
            </Typography>
            <Typography variant="body2" color="text.secondary">
              SOS-гель для локального застосування створений спеціально для
              проблемної шкіри.
              <ul>
                <li>Об'єм: 30 ml </li>
                <li>
                  Нітроімідозол- спрямовано на очищення обличчя від шкідливих
                  бактерій та мікробів
                </li>
                <li>Ефірна олія чайного дерева</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 180 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod6} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Top Beauty Сиворітка
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Сироватка Top Beauty для проблемної шкіри,
              <ul>
                <li>Об'єм: 50ml </li>
                <li>Класифікація: Натуральна </li>
                <li>Тип шкіри: Для проблемної</li>
                <li>Зроблено в: Україні</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 275 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod7} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TOP BEAUTY FRANGIPANI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Крем батер дял тіла з ароматом червоного жасміна
              <ul>
                <li>Об'єм: 250 МЛ </li>
                <li>
                  Тип шкіри   Нормальна, Суха, Жирна, В'януча (зріла), Чутлива,
                  Всі типи шкіри, Проблемна
                </li>
                <li>Класифікація косметичного засобу  -Мас маркет</li>
                <li>Зроблено в: Україна</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 160 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod8} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bogenia Brow Liner
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Тональный крем.
              <ul>
                <li>Об'єм: 0.78g</li>
                <li>Класифікація: професійна</li>
                <li>Країна ТМ: Туреччина</li>
                <li>Зроблено в: Китай</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 50 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod9} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Top beauty Brow Fix Soap
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Мило для фіксації брів
              <ul>
                <li>Об'єм: 30ml </li>
                <li>Класифікація: мас маркет</li>
                <li>Країна ТМ: Туреччина</li>
                <li>Виготовлено в: Україні</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 275 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod10} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TOP BEAUTY SERUM FACE
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Сироватка ліфтінг для обличча з колагеном та муцином равлики
              <ul>
                <li>Об'єм: 30ml </li>
                <li>
                  Тип шкіри   Нормальна, Суха, Жирна, Комбінована (Змішана), Всі
                  типи шкіри
                </li>
                <li>Область застосування   Обличчя, Шия</li>
                <li>Країна виробник: Україна</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 189 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod11} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TOP BEAUTY FACE SERUM
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Сироватка для обличча зволожуюча з алое та гіалуроном
              <ul>
                <li>Об'єм: 30ml </li>
                <li>
                  Тип шкіри: Нормальна, Суха, Жирна, Комбінована (Змішана), Всі
                  типи шкіри, Проблемна
                </li>
                <li>Область застосування   Обличчя, Шия</li>
                <li>Країна виробник: Україна</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 189 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod12} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Topface Skin Twin Perfect Stick Contour
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Контуринг-стік для обличчя
              <ul>
                <li>Об'єм: 9g</li>
                <li>Класифікація: мас маркет</li>
                <li></li>
                <li>Країна виробник: Туреччина</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 215 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod13} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Topface Skin Twin Perfect Stick
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Хайлайтер-стік
              <ul>
                <li>Об'єм: 9g</li>
                <li>Класифікація: мас маркет</li>
                <li></li>
                <li>Країна виробник: Туреччина</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 189 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod14} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              VELVET MATT CONCYLER BOGENIA BG620
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Консілер для обличча
              <ul>
                <li>Об'єм: 8ml </li>
                <li></li>
                <li></li>
                <li>Країна виробник: Туреччина</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 189 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod15} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bogenia Glossiness Gel Lipstick
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Помада гелева для губ
              <ul>
                <li>Об'єм: 2.2g</li>
                <li>Класифікація: професійна</li>
                <li></li>
                <li>Країна виробник: Україна</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 120 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="240" image={prod16} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bogenia Mascara Waterproof Velvet BG900
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Водостійка туш для вій
              <ul>
                <li>Об'єм: 8m</li>
                <li>Класифікація: професійна</li>
                <li>Область застосування   Обличчя, Шия</li>
                <li>Країна виробник: Китай</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 135 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 350 }}>
          <CardMedia component="img" height="240" image={prod17} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              НАБІР 3в1 для волос з ефектом ламінування
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <ul>
                <li>Lamination hair shampo</li>
                <li>Lamination hair conditioner</li>
                <li>Lamination hair spray</li>
                <li></li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 135 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 350 }}>
          <CardMedia component="img" height="240" image={prod3} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Набір 3в1 проти акне
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <ul>
                <li> </li>
                <li>Пінка з щіткою - 180 грн.</li>
                <li>Сиворітка 50 мл. - 195 грн</li>
                <li>SOS-гель 30мл. -170 грн</li>
              </ul>
              <ul></ul>
              <Typography gutterBottom variant="h5">
                Ціна: 500 грн
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}
