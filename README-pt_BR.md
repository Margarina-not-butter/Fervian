![English](README-WEBSITE.md) - ![Português](README-WEBSITE-pt_BR.md)

![image](https://github.com/user-attachments/assets/71d020cf-f822-4f82-ba68-44ed53f6f1e6)

Fervian é o website/blog do Margarina feito com HTML, CSS e JS. Ele possui um sistema de blog feito inteiramente em JavaScript vanilla que precia do servidor apenas para servir os arquivos estáticos do website + o JSON do post. É usado apenas um ``post()`` para carregar a postagem do blog e não é indexação de postagens no ``index.html``, então isso deve ser feito manualmente.

## Bibliotecas utilizadas
 - jQuery
 - 98.css (modificada)

## Fontes importadas
 - Pixelated MS Sans Serif

## Template de postagem do blog
```
{  
    "title": "Exemplo",
    "htmlContent":"<p>Este é um post de exemplo.</p>"
}
```

## Por que isso existe?
Eu adoro fazer soluções leves para problemas que não precisam de muita engenharia, sem contar que é perfeito para plataformas de hosting limitadas como [NeoCities](https://neocities.org) e [Infinityfree](https://infinityfree.com)/seus usuários que geralmente são relutantes em usar código complexo nos seus websites.
