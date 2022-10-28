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
import prod5 from "../../images/products/prod5.jpg";
import prod7 from "../../images/products/prod7.jpg";

import prod17 from "../../images/products/prod17.jpg";

export default function CreameGrid() {
  return (
    <Box sx={{ margin: 5 }}>
      <Grid
        container
        direction="raw"
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="stretch"
      >
        <Card sx={{ maxWidth: 250 }}>
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

        <Card sx={{ maxWidth: 250 }}>
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

        <Card sx={{ maxWidth: 250 }}>
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

        <Card sx={{ maxWidth: 250 }}>
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
