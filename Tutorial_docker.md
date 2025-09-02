# The Single-Cell Notebooks with Docker — A Beginner's Guide

This guide shows you how to install and run single-cell analysis notebooks using Docker, even if you've never used Docker before. Take a deep breath, follow the steps, and you'll be fine! 🚀

---

### What is this?

This project provides ready-made Jupyter notebooks for analyzing single-cell transcriptome data (single-cell RNA-seq). Everything comes packaged in a Docker image — meaning you don't need to install Python, libraries, or configure anything complicated.

---

## Step 1: Install Docker

First, you need to have Docker installed on your computer.

Go to [docs.docker.com/install](https://docs.docker.com/install/) and follow the instructions for your operating system (Windows, macOS, or Linux).

---

## Step 2: Download the notebook image

Open the terminal (or command prompt) and type:

```bash
docker pull integrativebioinformatics/sc-notebooks

```
---

## Step 3: Prepare a local folder

Create a folder on your computer where you want to save the generated files.

Example paths:

- **Windows:** `C:\my_data_sc`
- **Mac/Linux:** `~/my_data_sc`

This folder will be mounted inside the Docker container so you can access and save files directly from Jupyter.

---

## Step 4: Run the container

Open the terminal and run the command below, replacing `[LOCAL_PATH]` with the path to the folder you created in the previous step:

```bash
docker run --rm -p 8888:8888 -v [LOCAL_PATH]:/home/jovyan/work integrativebioinformatics/sc-notebooks
```

```bash
docker run --rm -p 8888:8888 -v C:\my_sc_data:/home/jovyan/work integrativebioinformatics/sc-notebooks
```

---

## Step 5: Open the notebooks in the browser

After running the container, open the browser and Access:

```bash
http://127.0.0.1:8888/tree?token=SC-Notebooks
```
---
# PT - BR
# The Single-Cell Notebooks com Docker — Guia para Iniciantes

Este guia mostra como instalar e rodar os notebooks de análise single-cell usando Docker, mesmo que você nunca tenha usado Docker antes. Respira fundo, segue os passos, e vai dar tudo certo! 🚀

---

### O que é isso?

Este projeto disponibiliza notebooks Jupyter prontos para análise de dados de transcriptoma de célula única (single-cell RNA-seq). Tudo vem empacotado em uma imagem Docker — ou seja, você não precisa instalar Python, bibliotecas ou configurar nada complicado.

---

## Passo 1: Instalar o Docker

Antes de tudo, você precisa ter o Docker instalado no seu computador.

Acesse [docs.docker.com/install](https://docs.docker.com/install/) e siga as instruções para seu sistema operacional (Windows, macOS ou Linux).

---

## Passo 2: Baixar a imagem dos notebooks

Abra o terminal (ou prompt de comando) e digite:

```bash
docker pull integrativebioinformatics/sc-notebooks

```
---

## Passo 3: Preparar uma pasta local

Crie uma pasta no seu computador onde você quer guardar os arquivos gerados.

Exemplos de caminhos:

- **Windows:** `C:\meus_dados_sc`
- **Mac/Linux:** `~/meus_dados_sc`

Essa pasta será montada dentro do container Docker para que você possa acessar e salvar arquivos diretamente do Jupyter.

---

## Passo 4: Rodar o container

Abra o terminal e execute o comando abaixo, substituindo `[CAMINHO_LOCAL]` pelo caminho da pasta que você criou no passo anterior:

```bash
docker run --rm -p 8888:8888 -v [CAMINHO_LOCAL]:/home/jovyan/work integrativebioinformatics/sc-notebooks
```


```bash
docker run --rm -p 8888:8888 -v C:\meus_dados_sc:/home/jovyan/work integrativebioinformatics/sc-notebooks
```

---

## Passo 5: Abrir os notebooks no navegador

Depois de rodar o container, abra o navegador e acesse:

```bash
http://127.0.0.1:8888/tree?token=SC-Notebooks
```
---
# ES

# The Single-cell Notebooks con Docker: Guía para principiantes

Esta guía te muestra cómo instalar y ejecutar notebooks de análisis de una sola célula con Docker, incluso si nunca lo has usado. ¡Respira hondo, sigue los pasos y todo irá bien! 🚀

---

### ¿Qué es esto?

Este proyecto proporciona notebooks Jupyter listos para usar para analizar datos del transcriptoma de célula unica (secuenciación de ARN de célula unica). Todo viene empaquetado en una imagen de Docker, lo que significa que no necesitas instalar Python, bibliotecas ni configurar nada complicado.

---

## Paso 1: Instalar Docker

Primero, necesitas tener Docker instalado en tu ordenador.

Ve a [docs.docker.com/install](https://docs.docker.com/install/) y sigue las instrucciones para tu sistema operativo (Windows, macOS o Linux).

---

## Paso 2: Descargar la imagen del notebook

Abre la terminal (o el símbolo del sistema) y escribe:

```bash
docker pull integrativebioinformatics/sc-notebooks

```
---

## Paso 3: Preparar una carpeta local

Crea una carpeta en tu ordenador donde quieras guardar los archivos generados.

Ejemplos de rutas:

- **Windows:** `C:\dato_sc`
- **Mac/Linux:** `~/dato_sc`

Esta carpeta se montará dentro del contenedor Docker para que puedas acceder y guardar archivos directamente desde Jupyter.

---

## Paso 4: Ejecutar el contenedor

Abre la terminal y ejecuta el siguiente comando, reemplazando `[LOCAL_PATH]` por la ruta de la carpeta creada en el paso anterior:

```bash
docker run --rm -p 8888:8888 -v [LOCAL_PATH]:/home/jovyan/work integrativebioinformatics/sc-notebooks
```

```bash
docker run --rm -p 8888:8888 -v C:\dato_sc:/home/jovyan/work integrativebioinformatics/sc-notebooks
```

---

## Paso 5: Abrir los notebooks en el navegador

Después de ejecutar el contenedor, abre el navegador y accede a Access:

```bash
http://127.0.0.1:8888/tree?token=SC-Notebooks
```
