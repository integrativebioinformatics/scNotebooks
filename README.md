## Overview

Single-cell sequencing technologies are powerful tools used to assess genomic, transcriptomic and proteomics information at the single-cell level. In recent years, the application of techniques that use single-cell sequencing have become increasingly common in several areas of research: including medicine, agriculture, and other life sciences disciplines. Single-cell sequencing may be used to study many aspects of an organism’s biology, both in health and disease, and the results of these studies contribute immensely to advancing the understanding of organisms as a whole. 

The establishment of collaborative scientific endeavors like the [Human Cell Atlas](https://www.humancellatlas.org/) or the [LatinCells Project](https://www.latincells.org/) is a testament to the surging enthusiasm and curiosity in this domain. Yet, when we look towards Latin America, we find a gap in the necessary infrastructure, financial support, and subject matter expertise required to harness these cutting-edge technologies. Recognizing this, our workshop is designed to bridge this gap. We provide participants with hands-on experience in the laboratory and in-depth bioinformatics training, ensuring that the region advances in its capabilities with single-cell methodologies.

---
### Cite Us | Cite-nos | Cítanos

Rojas-Hidalgo, A., Arias-Carrasco, R., Silva, J.K. et al.  
*The Single Cell Notebooks for inclusive and accessible training in single-cell and spatial omics.*  
Nature Genetics, 2026, Volume 58, Issue 5, Pages 789–795.  
ISSN: 1061-4036  
https://doi.org/10.1038/s41588-026-02584

---
### Tell Us | Conte-nos | Cuéntanos

If you used the scNotebooks for training, courses, or studies, please let us know!  
Send us a message in the **GitHub Discussions forum** or through GitHub — we would love to hear from you.  
If you would like to help translate the notebooks into another language, feel free to reach out so we can expand the project together.  

Se você utilizou os scNotebooks para treinamento, cursos ou estudos, nos deixe saber!  
Mande uma mensagem no **fórum do GitHub Discussions** ou pelo GitHub — adoraríamos saber.  
Se quiser ajudar a traduzir os notebooks para outra língua, entre em contato para que possamos expandir o projeto juntos.  

Si utilizaste los scNotebooks para capacitación, cursos o estudios, ¡déjanos saber!  
Envíanos un mensaje en el **foro de GitHub Discussions** o por GitHub — nos encantaría saberlo.  
Si deseas ayudar a traducir los notebooks a otro idioma, ponte en contacto para que podamos ampliar el proyecto juntos.

---
### How to Use

Our notebooks are available in **multilingual versions** and can be accessed in three simple ways:

#### Option 1: Open in Google Colab  
You can run the notebooks directly in your browser using [Google Colab](https://colab.research.google.com/), with no need to install anything locally.  
Just follow our step-by-step [multilingual tutorial](https://github.com/integrativebioinformatics/scNotebooks/blob/main/Tutorial_Open_scNotebooks_Colab.md) to learn how to:
- Manually upload `.ipynb` files
- Clone the GitHub repository and open notebooks directly in Colab

###### *Some notebooks with many embedded images may not render properly on GitHub. For full functionality, we recommend opening them directly in Colab or accessing our official website.*

#### Option 2: Run Locally with Docker  
If you prefer to work offline or want a fully configured environment, you can run the notebooks using Docker.  
Check out our [Docker tutorial](https://github.com/integrativebioinformatics/scNotebooks/blob/main/Tutorial_docker.md) for detailed instructions on:
- Pulling the official image from DockerHub
- Mounting local directories to save outputs and access reference files
- Launching the Jupyter interface locally

#### Option 3: Open Modules via Website
If you prefer a simpler way to browse the notebooks without installing anything or creating an account, you can access them directly through [our official website](https://integrativebioinformatics.github.io/scNotebooks/).
On the site you will find:
- The same content available in the repository, organized by module, with accessibility in three languages (English, Spanish, and Portuguese)
- Code cells displayed in a copy‑ready format for easy transfer to your own environment
- Easier loading and browsing of information, with no login required
  
> Please note: scNotebooks cannot be executed directly on the website; they are provided for browsing and copying code only.

#### Option 4: View PDFs with Outputs
If you prefer to see the executed results directly, you can access the notebooks in [PDF format.](https://github.com/integrativebioinformatics/scNotebooks/tree/main/PDF)
On the PDFs you will find:
- All code cells already run, with outputs displayed alongside the code
- Figures, plots, and tables rendered in their final form
- A static, easy‑to‑browse format that does not require installation or login

> Please note: PDFs are currently available only in English, but they can be easily translated using any online translation tool. They are read‑only and cannot be edited or re‑executed, serving as a resource for reviewing outputs and understanding the workflow without running the code yourself.

## Community Support and Feedback

We value continuous improvement and collaboration. To support learners and researchers, we maintain a dedicated space in [GitHub Discussions](https://github.com/integrativebioinformatics/scNotebooks/discussions), where you can engage with us directly:
- Ask Questions: Clarify workflows, tools, or concepts presented in the notebooks
- Report Errors: Help us identify and correct mistakes to improve the material
- Request Help: Share challenges and receive guidance from contributors and the community

> Our GitHub forum is linked from the official site, providing an open channel for communication and collective learning.

---
## Summary of Notebook Contents

### Module 01 - Introduction to notebooks and Databases

Jupyter Notebooks and Google Colaboratory provide interactive environments that combine code and explanatory text, supporting reproducible analysis. In this module, learners will explore their structure, including code and text cells, and gain familiarity with key public databases for single‑cell and gene expression data across humans and other organisms. Hands‑on exercises guide users through accessing, exploring, and analyzing these resources, building essential skills in biological data manipulation.

> **This notebook has many embedded images may not render properly on GitHub. We recommend opening them directly in Colab for full functionality or web site.**

Module:
- [English version](Notebooks_EN/Module01_IntroductionNotebooks_Databases.ipynb)
- [versión en Español](Cuadernos_ES/Modulo01_IntroduccionCuadernos_BasesDeDatos.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo01_IntrocuçaoNotebooks_BancosdeDados.ipynb)
- [中文版](Notebooks_ZH_CN/模块01_笔记本与数据库介绍.ipynb)

Site:
- [English version](https://integrativebioinformatics.github.io/scNotebooks/modules/en/module01/module01.html)
- [versión en Español](https://integrativebioinformatics.github.io/scNotebooks/modules/es/cuaderno01/cuaderno01.html)
- [Versão em Português](https://integrativebioinformatics.github.io/scNotebooks/modules/pt/modulo01/modulo01.html)

### Module 02 - Introduction to R and Data Visualization with ggplot2

This module introduces the R programming language, widely used in data science and bioinformatics for statistical analysis and data manipulation. Learners will explore the R environment, basic syntax, and core data structures such as vectors and data frames. The module also presents the ggplot2 package, a powerful tool for creating elegant and customizable visualizations using the grammar of graphics. Through hands-on exercises, users will practice writing R code, creating plots, and interpreting biological data, building a strong foundation for future analytical tasks.

- [English version](Notebooks_EN/Module02_IntroductionToR.ipynb)
- [versión en Español](Cuadernos_ES/Modulo02_IntroduccionR.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo02_IntroduçaoR.ipynb)
- [中文版](Notebooks_ZH_CN/模块02_R语言与ggplot2入门.ipynb)

### Module 03 - Processing raw scRNA-seq data
This notebook introduces essential command-line operations in Linux, covering fundamental commands that are broadly applicable across programming languages with minimal adaptations. These foundational skills will support efficient data management and analysis in computational biology. Additionally, we will explore the key steps in processing raw sequencing reads into count matrices using Cell Ranger, discussing its main outputs and role in single-cell transcriptomics.
- [English version](Notebooks_EN/Module03_Processing_RawSeqs_CellRanger.ipynb)
- [versión en Español](Cuadernos_ES/Modulo03_ProcesamientoSecuenciasBrutas_CellRanger.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo03_ProcessamentoSequenciasBrutas_CellRanger.ipynb)
- [中文版](Notebooks_ZH_CN/模块03_CellRanger处理原始测序数据.ipynb)

### Module 04 - Quality Control, Clustering, Annotation, and Functional Analysis 

Single‑cell RNA‑seq analysis requires a structured workflow to ensure data quality and biological interpretability. In this module, learners will use Seurat to import raw data, apply filtering, and perform preliminary visualization as part of quality control. Key steps include evaluating quality metrics, normalizing to reduce technical variability, and clustering cells by gene expression profiles to reveal underlying heterogeneity. Building on this foundation, users will conduct differential expression and abundance analysis, annotate cell types, and perform functional enrichment to uncover regulatory mechanisms and pathways involved in development and disease. The module also introduces practical strategies for identifying marker genes and removing ambient mRNA contamination, ensuring cleaner datasets and more reliable downstream results. Through these exercises, participants gain both conceptual understanding and hands‑on skills for comprehensive scRNA‑seq analysis.

- [English version](Notebooks_EN/Module04_QualityControl_Clustering_Annotation_FunctionalAnalysis.ipynb)
- [versión en Español](Cuadernos_ES/Modulo04_ControlCalidad_Agrupamiento_Anotacion_AnalisisFuncionales.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo04_ControleQualidade_Agrupamento_Anotaçao_AnalisesFuncionais.ipynb).
- [中文版](Notebooks_ZH_CN/模块04_质控聚类注释与功能分析.ipynb)

### Module 05 - Integrating single-cell transcriptomes from multiple samples

Data integration and batch correction are essential for reliable single‑cell analysis, ensuring that biological signals are not obscured by technical or donor‑specific variation. In this module, learners will investigate how differences in protocols, platforms, or sample origin generate batch effects, and how defining batch covariates influences integration outcomes. Practical exercises with Seurat and Harmony provide hands‑on experience in applying correction methods, tuning parameters, and evaluating integration quality. Benchmarking activities allow users to compare strategies, highlighting trade‑offs between reducing unwanted variation and preserving meaningful biological information. By combining theoretical concepts with applied workflows, participants gain the skills needed to select and implement effective integration approaches in diverse single‑cell studies.

- [English version](Notebooks_EN/Module05_DatasetIntegration.ipynb)
- [versión en Español](Cuadernos_ES/Modulo05_IntegracionDatos.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo05_Integraçao_MultiplasAmostras.ipynb)
- [中文版](Notebooks_ZH_CN/模块05_多样本整合与批次校正.ipynb)

### Module 06 - Trajectory inference and pseudotemporal ordering

This module explores how single‑cell RNA‑seq can be used to reconstruct cell‑state trajectories. Learners will study how gene expression changes dynamically during development and differentiation, and how computational tools infer these transitions. Hands‑on activities with Monocle3 demonstrate pseudotime ordering and trajectory inference, allowing users to trace developmental histories and interpret functional shifts in cellular states.

- [English version](Notebooks_EN/Module06_PseudotimeAnalysis.ipynb)
- [versión en Español](Cuadernos_ES/Modulo06_AnalisisPseudotiempo.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo06_Pseudotempo.ipynb)
- [中文版](Notebooks_ZH_CN/模块06_轨迹推断与伪时间分析.ipynb)

### Module 07 - Deciphering cell-cell communication in single-cell transcriptomics data

Cell–cell communication is fundamental for coordinating activities in multicellular systems, shaping processes such as development, immune response, and tissue homeostasis. In this module, learners will examine how signaling and interaction sustain these functions and explore strategies for inferring interactions from single‑cell gene expression data, with emphasis on curated ligand–receptor resources. Hands‑on activities with LIANA provide practical experience, applying multiple state‑of‑the‑art methods within a unified workflow to compare predictions and interpret biological relevance. Through these exercises, users gain both conceptual understanding and applied skills for studying cellular coordination in complex tissues.

- [English version](Notebooks_EN/Module07_CellCell_Communication.ipynb)
- [versión en Español](Cuadernos_ES/Modulo07_Comunicacion_CelulaCelula.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo07_Comunicaçao_CelulaCelula.ipynb)
- [中文版](Notebooks_ZH_CN/模块07_细胞间通讯分析.ipynb)


### Module 08 - Multimodal Single-Cell Analysis

Multimodal single‑cell analysis combines transcriptomic and protein measurements to provide a more comprehensive view of cellular states. In this module, learners will analyze umbilical cord blood mononuclear cells (CBMCs) using Seurat to explore relationships between RNA and surface protein expression. Working with RNA and antibody‑derived tag (ADT) count matrices, users investigate expression patterns and their biological implications. Hands‑on activities include downloading data from NCBI GEO and performing key analyses, reinforcing both theoretical concepts and practical skills.

- [English version](Notebooks_EN/Module08_MultimodalDataAnalysis.ipynb)
- [versión en Español](Cuadernos_ES/Modulo08_Analisis_DatosMultimodales.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo08_AnaliseDadosMultimodais.ipynb)
- [中文版](Notebooks_ZH_CN/模块08_多模态单细胞数据分析.ipynb)

### Module 09 - TCR Profiling in Single-Cell Analysis

T cell receptor (TCR) profiling and CITE‑Seq are powerful techniques for single‑cell immunology, offering complementary insights into adaptive immune responses and cellular heterogeneity. In this module, learners will explore how TCR profiling reveals the diversity and specificity of T cell repertoires, while CITE‑Seq integrates transcriptomic and protein measurements to provide a multimodal view of cellular states. Core concepts are followed by hands‑on activities using computational tools, where participants apply these methods to study immune repertoires and interpret complex datasets. Through this approach, users gain both theoretical grounding and practical skills for investigating adaptive immunity in single‑cell research.

- [English version](Notebooks_EN/Module09_TCRsequence.ipynb)
- [versión en Español](Cuadernos_ES/Modulo09_SecuenciaTCR.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo09_SequenciamentoCelulaT.ipynb)
- [中文版](Notebooks_ZH_CN/模块09_TCR测序与免疫克隆分析.ipynb)

### Module 10 - An introduction to Spatial Transcriptomics approaches

Spatial transcriptomics provides a way to map gene expression directly within tissues, revealing cell types, their distribution, and interactions in native contexts. In this module, learners will examine how spatially resolved profiles advance our understanding of development and disease. Practical activities with Seurat guide users through building an analysis pipeline, recovering gene expression across regions, and applying cell type deconvolution methods to interpret spatial organization.

- [English version](Notebooks_EN/Module10_SpatialTranscriptomics.ipynb)
- [versión en Español](Cuadernos_ES/Modulo10_TranscriptomicaEspacial.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo10_TranscriptomicaEspacial.ipynb)
- [中文版](Notebooks_ZH_CN/模块10_空间转录组入门.ipynb)

### Module 11 - An introduction to Single cell Assay for Transposase-Accessible Chromatin sequencing (scATAC-seq): 

scATAC‑seq enables the study of chromatin accessibility at single‑cell resolution, revealing regulatory regions such as enhancers and promoters and providing insights into epigenetic variation across cell types and disease states. In this module, learners will work with data from [Kumegawa et al. (2022)](https://biosignaling.biomedcentral.com/articles/10.1186/s12964-022-01029-5#:~:text=In%20this%20study%2C%20we%20identify%20genomic%20binding%20sites,GRHL2%20peaks%20is%20associated%20with%20ER%20binding%20sites.), which profiled over 10,000 cells from breast cancer subtypes and identified GRHL2 as a key transcription factor in endocrine resistance. Hands‑on activities with ArchR guide users through processing raw sequencing data, identifying accessible regions, analyzing transcription factor activity, and integrating scATAC‑seq with scRNA‑seq. Benchmarking exercises compare integration strategies, ensuring accurate interpretation of gene regulation mechanisms.

- [English version](Notebooks_EN/Module11_scATACseq.ipynb)
- [versión en Español](Cuadernos_ES/Modulo11_scATACseq.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo11_scATACseq.ipynb)
- [中文版](Notebooks_ZH_CN/模块11_scATACseq染色质开放性分析.ipynb)

### Module 12 – Understanding Alternative Polyadenylation (APA)

Alternative polyadenylation (APA) shapes transcript diversity by altering poly(A) site usage, with important implications for gene regulation. In this module, learners will use SCAPE‑APA, a specialized tool for single‑cell RNA‑seq data, to detect, quantify, and interpret APA events. The workflow introduces input formats, preprocessing steps, and strategies for visualizing APA dynamics across cell types. Guided exercises provide hands‑on experience applying SCAPE‑APA to real datasets, enabling users to extract biologically meaningful insights and develop practical skills for analyzing transcriptomic complexity at single‑cell resolution.

- [English version](Notebooks_EN/Module12_AlternativePoliA.ipynb)
- [versión en Español](Cuadernos_ES/Modulo12_PoliadenilacionAlternativa.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo12_PoliadenilaçaoAlternativa.ipynb)
- [中文版](Notebooks_ZH_CN/模块12_单细胞APA分析.ipynb)

### Module 13 - Fair data and Sharing data

FAIR principles (Findable, Accessible, Interoperable, Reusable) provide the foundation for transparent and reproducible data sharing. In this module, learners will practice organizing metadata consistently and preparing submissions to public repositories such as GEO, SRA, SCEA, HCA Data Portal, and CellxGene. Emphasis is placed on understanding standard file formats and workflows, ensuring that datasets can be effectively reused and integrated across platforms.

- [English version](Notebooks_EN/Modulo13_PrinciplesFAIR_DataSharing.ipynb)
- [versión en Español](Cuadernos_ES/Modulo13_PrinciplesFAIR_IntercambioDatos.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo13_PrincipiosFAIR_CompartilhamentoDados.ipynb)
- [中文版](Notebooks_ZH_CN/模块13_FAIR原则与数据共享.ipynb)

---
### Authorship and Acknowledgments:

This comprehensive material has been a result of collaborative efforts since 2021 and has been successfully employed in numerous courses organized by esteemed institutions like the Human Cell Atlas, LatinCells initiative, and Wellcome Connecting Sciences. We extend our heartfelt gratitude to all the individuals listed below, who have actively contributed to the development and refinement of this material over the years. Their dedication and expertise have been instrumental in making this resource valuable for the bioinformatics community.

We appreciate the continuous support and feedback from participants, mentors, and institutions that have made this endeavor possible. Together, we strive to advance the understanding and application of single-cell genomics in Latin America and the Caribbean.

**List of Contributors - Listed Alphabetically:**

- Alex K. Shalek
- Adolfo Rojas-Hidalgo
- Benilton S. Carvalho
- Bruno Vinagre
- Cesar A. Prada-Medina
- Cristóvão Antunes
- Daniela Russo
- Diego Pérez-Stuardo
- Emiliano Vicencio
- Erick Armingol
- Gabriela Rapozo
- Gerardo Munoz
- Leandro Santos
- Joyce Karoline Silva
- Mariana Boroni
- Natalia Tavares
- Orr Ashenberg
- Patricia Severino
- Raúl Arias-Carrasco
- Ricardo Khouri
- Sebastián Urquiza-Zurich
- Sergio Triana
- Vinicius Maracaja-Coutinho
- Yesid Cuesta-Astroz


******
## License
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
