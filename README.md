## Overview

Single-cell sequencing technologies are powerful tools used to assess genomic, transcriptomic and proteomics information at the single-cell level. In recent years, the application of techniques that use single-cell sequencing have become increasingly common in several areas of research: including medicine, agriculture, and other life sciences disciplines. Single-cell sequencing may be used to study many aspects of an organism’s biology, both in health and disease, and the results of these studies contribute immensely to advancing the understanding of organisms as a whole. 

The establishment of collaborative scientific endeavors like the [Human Cell Atlas](https://www.humancellatlas.org/) or the [LatinCells Project](https://www.latincells.org/) is a testament to the surging enthusiasm and curiosity in this domain. Yet, when we look towards Latin America, we find a gap in the necessary infrastructure, financial support, and subject matter expertise required to harness these cutting-edge technologies. Recognizing this, our workshop is designed to bridge this gap. We provide participants with hands-on experience in the laboratory and in-depth bioinformatics training, ensuring that the region advances in its capabilities with single-cell methodologies.

---
### How to Use

Our notebooks are available in **multilingual versions** and can be accessed in two simple ways:

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

#### Option 3: Option 3: Open Modules via Website
If you prefer a simpler way to browse the notebooks without installing anything or creating an account, you can access them directly through [our official website](https://integrativebioinformatics.github.io/scNotebooks/).
On the site you will find:
- The same content available in the repository, organized by module, with accessibility in three languages (English, Spanish, and Portuguese)
- Code cells displayed in a copy‑ready format for easy transfer to your own environment
- Easier loading and browsing of information, with no login required
  
> Please note: scNotebooks cannot be executed directly on the website; they are provided for browsing and copying code only.

---
## Community Support and Feedback

We value continuous improvement and collaboration. To support learners and researchers, we maintain a dedicated space in [GitHub Discussions](https://github.com/integrativebioinformatics/scNotebooks/discussions), where you can engage with us directly:
- Ask Questions: Clarify workflows, tools, or concepts presented in the notebooks
- Report Errors: Help us identify and correct mistakes to improve the material
- Request Help: Share challenges and receive guidance from contributors and the community

> Our GitHub forum is linked from the official site, providing an open channel for communication and collective learning.

---
## Summary of Notebook Contents

### Module 01 - Introduction to notebooks and Databases
This module provides an introduction to Jupyter Notebooks and Google Colaboratory, exploring their features and structure, including code cells and text cells. Additionally, we cover key public databases for single-cell data and other databases for gene expression, containing information for humans and other organisms. To enhance learning, we provide hands-on exercises for accessing, exploring, and analyzing these databases, allowing users to develop essential skills in biological data manipulation.

> **This notebook has many embedded images may not render properly on GitHub. We recommend opening them directly in Colab for full functionality or web site.**

Module:
- [English version](Notebooks_EN/Module01_IntroductionNotebooks_Databases.ipynb)
- [versión en Español](Cuadernos_ES/Modulo01_IntroduccionCuadernos_BasesDeDatos.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo01_IntrocuçaoNotebooks_BancosdeDados.ipynb)

Site:
- [English version](https://integrativebioinformatics.github.io/scNotebooks/modules/en/module01/module01.html)
- [versión en Español](https://integrativebioinformatics.github.io/scNotebooks/modules/es/cuaderno01/cuaderno01.html)
- [Versão em Português](https://integrativebioinformatics.github.io/scNotebooks/modules/pt/modulo01/modulo01.html)

### Module 02 - Introduction to R and Data Visualization with ggplot2
This module introduces the R programming language, widely used in data science and bioinformatics for statistical analysis and data manipulation. Learners will explore the R environment, basic syntax, and core data structures such as vectors and data frames. The module also presents the ggplot2 package, a powerful tool for creating elegant and customizable visualizations using the grammar of graphics. Through hands-on exercises, users will practice writing R code, creating plots, and interpreting biological data, building a strong foundation for future analytical tasks.

- [English version](Notebooks_EN/Module02_IntroductionToR.ipynb)
- [versión en Español](Cuadernos_ES/Modulo02_IntroduccionR.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo02_IntroduçaoR.ipynb)

### Module 03 - Processing raw scRNA-seq data
This notebook introduces essential command-line operations in Linux, covering fundamental commands that are broadly applicable across programming languages with minimal adaptations. These foundational skills will support efficient data management and analysis in computational biology.
Additionally, we will explore the key steps in processing raw sequencing reads into count matrices using Cell Ranger, discussing its main outputs and role in single-cell transcriptomics. Processing scRNA-seq data is a crucial step in single-cell analysis. The chosen library preparation method determines whether RNA sequences are captured from transcript ends (e.g., 10X Genomics, Drop-seq) or full-length transcripts (e.g., Smart-seq), directly influencing downstream analysis and biological insights.

- [English version](Notebooks_EN/Module03_Processing_RawSeqs_CellRanger.ipynb)
- [versión en Español](Cuadernos_ES/Modulo03_ProcesamientoSecuenciasBrutas_CellRanger.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo03_ProcessamentoSequenciasBrutas_CellRanger.ipynb)

### Module 04 - Quality Control, Clustering, Annotation, and Functional Analysis 

In this section, we will use the Seurat package to process and analyze scRNA‑seq data, covering essential steps such as data import, filtering, and preliminary visualization to ensure quality control before downstream analysis. A central aspect of scRNA‑seq is identifying genes and transcripts with distinct expression patterns across conditions, which helps reveal biological processes driving cellular heterogeneity. To refine the dataset, we will evaluate quality metrics, apply normalization to reduce technical variability, and implement clustering methods to group cells by gene expression profiles.

We will then perform differential expression and abundance analysis, cell type annotation, and functional enrichment to uncover regulatory mechanisms, identify key markers, and explore pathways involved in differentiation and disease. Finally, the module includes a simple step showing how to remove ambient mRNA contamination, ensuring cleaner and more reliable results.

- [English version](Notebooks_EN/Module04_Quality Control_Clustering_Annotation_FunctionalAnalysis.ipynb)
- [versión en Español](Cuadernos_ES/Modulo04_ControlCalidad_Agrupamiento_Anotacion_AnalisisFuncionales.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo04_ControleQualidade_Agrupamento_Anotaçao_AnalisesFuncionais.ipynb).

### Module 05 - Integrating single-cell transcriptomes from multiple samples:
As single-cell data complexity grows, integrating multiple datasets has become standard. However, batch effects—arising from technical and biological variations—must be corrected for accurate analysis. These effects stem from differences in sample handling, protocols, sequencing platforms, and biological factors like donor background or tissue origin.

Computational methods help eliminate unwanted variation, ensuring biologically meaningful signals. Batch correction requires two key decisions: selecting the appropriate method and its parameters, and defining the batch covariate based on the integration objective.

In this notebook, we explore core concepts and methods for data integration and batch correction, with hands-on activities using Seurat and Harmony. Additionally, we perform benchmarking to compare integration strategies, helping select the most effective method while preserving biological relevance.

- [English version](Notebooks_EN/Module05_DatasetIntegration.ipynb)
- [versión en Español](Cuadernos_ES/Modulo05_IntegracionDatos.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo05_Integraçao_MultiplasAmostras.ipynb)

### Module 06 - Trajectory inference and pseudotemporal ordering

Gene expression changes in a dynamic way as cells transition from one state to another. These transitions occur during development and throughout life, which makes them of interest to understand changes in the cellular functions. In each of these states, some genes get activated and others silenced. 
By using scRNA-seq data, computational tools such as Monocle3 can infer the single-cell trajectories that cells undergo when transitioning across the different functional states. Thus, the developmental history (ontogeny) of differentiated cell types can be traced. This notebook will cover the key concepts and methods related to inferring cell-state trajectory and pseudotime ordering, followed by hands-on activities that illustrate the use of Monocle3, a tool devised for this purpose.

- [English version](Notebooks_EN/Module06_Pseudotime_Analysis.ipynb)
- [versión en Español](Cuadernos_ES/Modulo06_AnalisisPseudotiempo.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo06_Pseudotempo.ipynb)

### Module 07 - Deciphering cell-cell communication in single-cell transcriptomics data:

Cell-cell communication plays a crucial role in coordinating cellular activities and maintaining the overall functionality of multicellular organisms. It allows cells to transmit signals, exchange information, and coordinate their behaviors, ultimately contributing to essential biological processes such as development, immune response, and tissue homeostasis. 
In this context, inferring cell-cell interactions from gene expression data becomes valuable for unraveling the multiple roles and coordination processes that cells perform within multicellular systems. 
In this notebook, main concepts and a general computational workflow will be covered, then hands-on activities will be performed using LIANA, a flexible tool implementing multiple state-of-the-art methods to study cell-cell interactions.

- [English version](Notebooks_EN/Module07_CellCell_Communication.ipynb)
- [versión en Español](Cuadernos_ES/Modulo07_Comunicacion_CelulaCelula.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo07_Comunicaçao_CelulaCelula.ipynb)


### Module 08 - Multimodal Single-Cell Analysis: 

This notebook explores multimodal data integration at the single-cell level, combining transcriptomic measurements with protein quantification. Using a dataset of 8,617 umbilical cord blood mononuclear cells (CBMCs), we follow a Seurat tutorial to analyze the relationships between RNA and surface protein expression. By loading count matrices for RNA and antibody-derived tags (ADT), we investigate cellular expression patterns and their biological implications. In addition to theoretical concepts, this notebook includes practical activities for downloading data from NCBI GEO and executing key analyses.

- [English version](Notebooks_EN/Module08_MultimodalDataAnalysis.ipynb)
- [versión en Español](Cuadernos_ES/Modulo08_Analisis_DatosMultimodales.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo08_AnaliseDadosMultimodais.ipynb)

### Module 09 - TCR Profiling in Single-Cell Analysis: 

T cell receptor (TCR) profiling and Cellular Indexing of Transcriptomes and Epitopes by Sequencing (CITE-Seq) are pivotal techniques in single-cell research, offering unparalleled insights into the adaptive immune system and cellular heterogeneity. TCR profiling enables a deep dive into the repertoire and diversity of T cell populations, highlighting the specificity and uniqueness of T cell responses. On the other hand, CITE-Seq facilitates the concurrent assessment of transcriptomic data and protein expression within individual cells, creating a comprehensive portrayal of cellular states.

In this module, participants will explore the profound implications of TCR profiling in understanding immune responses and the synergies it can achieve when coupled with CITE-Seq. We'll initiate with core concepts and theories, and swiftly transition into practical applications using advanced computational tools. Through this hands-on approach, attendees will master the nuances of TCR profiling and CITE-Seq, equipping them with valuable tools for their immunological and single-cell research pursuits.

- [English version](Notebooks_EN/Module09_TCRsequence.ipynb)
- [versión en Español](Cuadernos_ES/Modulo09_SecuenciaTCR.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo09_SequenciamentoCelulaT.ipynb)

### Module 10 - An introduction to Spatial Transcriptomics approaches

Spatial transcriptomics is a rapidly evolving field that aims to provide a spatially resolved gene expression profile of a tissue or organ. This technology has the potential to advance our understanding of complex biological processes and help identify new biomarkers for disease diagnosis and treatment. 
The main goal of spatial transcriptomics is to capture the gene expression profile of individual cells (or a mini mixture of cells in a given region) in their native tissue context, allowing for the identification of cell types and their spatial distribution. This information can then be used to create detailed maps of gene expression within tissues, providing insights into cellular interactions, developmental processes, and disease progression. 
In this notebook, we will cover practical steps in setting up a spatial transcriptomics analysis pipeline using the Seurat package. We will cover the basic analysis to recover gene expression in different regions as well as cell type deconvolution approaches.

- [English version](Notebooks_EN/Module10_SpatialTranscriptomics.ipynb)
- [versión en Español](Cuadernos_ES/Modulo10_TranscriptomicaEspacial.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo10_TranscriptomicaEspacial.ipynb)

### Module 11 - An introduction to Single cell Assay for Transposase-Accessible Chromatin sequencing (scATAC-seq): 

scATAC-seq is a technique used to study chromatin accessibility at the single-cell level. Unlike scRNA-seq, which focuses on gene expression, scATAC-seq identifies regions of the genome that are open and potentially active, meaning they can be bound by transcription factors to regulate gene activity.

This method helps researchers understand gene regulation, identify enhancers and promoters, and explore epigenetic variations across different cell types or disease conditions. In this notebook, we utilize data from [Kumegawa et al. (2022)](https://biosignaling.biomedcentral.com/articles/10.1186/s12964-022-01029-5#:~:text=In%20this%20study%2C%20we%20identify%20genomic%20binding%20sites,GRHL2%20peaks%20is%20associated%20with%20ER%20binding%20sites.), which examined over 10,000 cells from 16 patients across different subtypes, including luminal, luminal-HER2, HER2+, and triple-negative. The study identified the GRHL2 transcription factor, which interacts with FOXA1 in endocrine resistance, regulating genes associated with metastasis and poor prognosis.

Using ArchR, an optimized tool for scATAC-seq analysis, we will process raw sequencing data, identify accessible chromatin regions, analyze transcription factor activity, and integrate scATAC-seq with scRNA-seq to explore gene regulation mechanisms. The notebook also includes a benchmarking step to compare integration methods, ensuring accurate data interpretation.

- [English version](Notebooks_EN/Module11_scATACseq.ipynb)
- [versión en Español](Cuadernos_ES/Modulo11_scATACseq.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo11_scATACseq.ipynb)

### Module 12 – Understanding Alternative Polyadenylation (APA)

This module focuses on the bioinformatic analysis of Alternative Polyadenylation (APA) using SCAPE-APA, a specialized computational tool designed for single-cell RNA-seq data. Learners will explore the principles behind APA detection, quantification, and interpretation in a high-throughput context. The module introduces the structure and workflow of SCAPE-APA, including input formats, preprocessing steps, and output interpretation. Through guided exercises, users will apply SCAPE-APA to real datasets, visualize APA dynamics across cell types, and extract biologically meaningful insights from polyadenylation site usage. This hands-on approach equips learners with essential skills for analyzing transcriptomic complexity at single-cell resolution.

- [English version](Notebooks_EN/Module12_AlternativePoliA.ipynb)
- [versión en Español](Cuadernos_ES/Modulo12_PoliadenilacionAlternativa.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo12_PoliadenilaçaoAlternativa.ipynb)

### Module 13 - Fair data and Sharing data

This module explain the principles of FAIR data (Findable, Accessible, Interoperable, Reusable) and teaches how to organize metadata consistently to ensure reproducibility and transparency. Learners are guided through preparing submissions to central repositories such as GEO, SRA, SCEA, HCA Data Portal, and CellxGene, with emphasis on the standard file formats required.

- [English version](Notebooks_EN/Modulo13_FAIRdata_DataSharing.ipynb)
- [versión en Español](Cuadernos_ES/Modulo13_FAIRData_IntercambioDatos.ipynb)
- [Versão em Português](Cadernos_PT_BR/Modulo13_DadosFAIR_CompartilhamentoDados.ipynb)

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
