## Overview

Single-cell sequencing technologies are powerful tools used to assess genomic, transcriptomic and proteomics information at the single-cell level. In recent years, the application of techniques that use single-cell sequencing have become increasingly common in several areas of research: including medicine, agriculture, and other life sciences disciplines. Single-cell sequencing may be used to study many aspects of an organism’s biology, both in health and disease, and the results of these studies contribute immensely to advancing the understanding of organisms as a whole. 

The establishment of collaborative scientific endeavors like the [Human Cell Atlas](https://www.humancellatlas.org/) or the [LatinCells Project](https://www.latincells.org/) is a testament to the surging enthusiasm and curiosity in this domain. Yet, when we look towards Latin America, we find a gap in the necessary infrastructure, financial support, and subject matter expertise required to harness these cutting-edge technologies. Recognizing this, our workshop is designed to bridge this gap. We provide participants with hands-on experience in the laboratory and in-depth bioinformatics training, ensuring that the region advances in its capabilities with single-cell methodologies.

### Practical Modules with Google Colab Notebooks:

## Module 01 - INTRODUCTION TO NOTEBOOKS AND DATABASES
This module provides an introduction to Jupyter Notebooks and Google Colaboratory, exploring their features and structure, including code cells and text cells. Additionally, we cover key public databases for single-cell data and other databases for gene expression, containing information for humans and other organisms. To enhance learning, we provide hands-on exercises for accessing, exploring, and analyzing these databases, allowing users to develop essential skills in biological data manipulation.

[English version](Notebooks_EN/Module01_IntroductionNotebooks_and_Databases.ipynb)

[versión en Español](Cuadernos_ES/Modulo01_IntroducciónCuadernos_BasesDeDatos.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo01_IntrocucaoNotebooks_e_BancosdeDados.ipynb)

## Module 02 - Processing raw scRNA-seq data
This notebook introduces essential command-line operations in Linux, covering fundamental commands that are broadly applicable across programming languages with minimal adaptations. These foundational skills will support efficient data management and analysis in computational biology.
Additionally, we will explore the key steps in processing raw sequencing reads into count matrices using Cell Ranger, discussing its main outputs and role in single-cell transcriptomics. Processing scRNA-seq data is a crucial step in single-cell analysis. The chosen library preparation method determines whether RNA sequences are captured from transcript ends (e.g., 10X Genomics, Drop-seq) or full-length transcripts (e.g., Smart-seq), directly influencing downstream analysis and biological insights.

[English version](Notebooks_EN/Module02_Processing_RawSeqs_CellRanger.ipynb)

[versión en Español](Cuadernos_ES/Modulo02_ProcesamientoSecuenciasBrutas_CellRanger.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo02_ProcessamentoSequenciasBrutas_CellRanger.ipynb)

## Module 03 - Quality Control, Differential expression, Cell Type Annotation, Clustering and Functional Data analysis

In this section, we will use the Seurat package to process and analyze scRNA-seq data, covering essential steps such as data import, filtering, and preliminary visualization to ensure proper quality control before downstream analysis.

A key part of scRNA-seq analysis is identifying genes and transcripts with distinct expression patterns across different conditions. These differences can reveal underlying biological processes driving cellular heterogeneity. To refine the dataset, we will assess its quality using key metrics, apply normalization techniques to mitigate technical variability, and implement clustering methods to group cells based on gene expression patterns.

Furthermore, we will do differential expression analysis, cell type annotation, and functional enrichment techniques to uncover gene regulation mechanisms, identify key markers, and explore pathways involved in cellular differentiation and disease states. Together, these approaches provide a comprehensive framework for interpreting single-cell transcriptomics data and extracting meaningful biological insights.

[English version](Notebooks_EN/Module03_QualityControl_ReductionDimensionality_DiferentialExpressionAnalysis.ipynb)

[versión en Español](Cuadernos_ES/Modulo03_ControlCalidad_ReducionDimensionalidad_AnalisisEspresionDiferencial.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo03_ControleQualidade_ReducaoDimensionalidade_AnaliseExpressaoDiferencial.ipynb).

## Module 04 - Integrating single-cell transcriptomes from multiple samples:
As single-cell data complexity grows, integrating multiple datasets has become standard. However, batch effects—arising from technical and biological variations—must be corrected for accurate analysis. These effects stem from differences in sample handling, protocols, sequencing platforms, and biological factors like donor background or tissue origin.

Computational methods help eliminate unwanted variation, ensuring biologically meaningful signals. Batch correction requires two key decisions: selecting the appropriate method and its parameters, and defining the batch covariate based on the integration objective.

In this notebook, we explore core concepts and methods for data integration and batch correction, with hands-on activities using Seurat and Harmony. Additionally, we perform benchmarking to compare integration strategies, helping select the most effective method while preserving biological relevance.

[English version](Notebooks_EN/Module04_Dataset_Integration.ipynb)

[versión en Español](Cuadernos_ES/Modulo04_IntegraciónDatos.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo04_IntegracaoMultiplasAmostras.ipynb)

## Module 05 - Trajectory inference and pseudotemporal ordering

Gene expression changes in a dynamic way as cells transition from one state to another. These transitions occur during development and throughout life, which makes them of interest to understand changes in the cellular functions. In each of these states, some genes get activated and others silenced. 
By using scRNA-seq data, computational tools such as Monocle3 can infer the single-cell trajectories that cells undergo when transitioning across the different functional states. Thus, the developmental history (ontogeny) of differentiated cell types can be traced. This notebook will cover the key concepts and methods related to inferring cell-state trajectory and pseudotime ordering, followed by hands-on activities that illustrate the use of Monocle3, a tool devised for this purpose.

[English version](Notebooks_EN/Module05_Pseudotime_Analysis.ipynb)

[versión en Español](Cuadernos_ES/Modulo05_AnalasisPseudotiempo.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo05_Pseudotempo.ipynb)

## Module 06 - Deciphering cell-cell communication in single-cell transcriptomics data:

Cell-cell communication plays a crucial role in coordinating cellular activities and maintaining the overall functionality of multicellular organisms. It allows cells to transmit signals, exchange information, and coordinate their behaviors, ultimately contributing to essential biological processes such as development, immune response, and tissue homeostasis. 
In this context, inferring cell-cell interactions from gene expression data becomes valuable for unraveling the multiple roles and coordination processes that cells perform within multicellular systems. 
In this notebook, main concepts and a general computational workflow will be covered, then hands-on activities will be performed using LIANA, a flexible tool implementing multiple state-of-the-art methods to study cell-cell interactions.

[English version](Notebooks_EN/Module06_CellCellCommunication.ipynb)

[versión en Español](Cuadernos_ES/Modulo06_Comunicación_CelulaCelula.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo06_ComunicacaoCelulaCelula.ipynb)


## Module 07 - Multimodal Single-Cell Analysis: 

This notebook explores multimodal data integration at the single-cell level, combining transcriptomic measurements with protein quantification. Using a dataset of 8,617 umbilical cord blood mononuclear cells (CBMCs), we follow a Seurat tutorial to analyze the relationships between RNA and surface protein expression. By loading count matrices for RNA and antibody-derived tags (ADT), we investigate cellular expression patterns and their biological implications. In addition to theoretical concepts, this notebook includes practical activities for downloading data from NCBI GEO and executing key analyses.

[English version](Notebooks_EN/Module07_MultimodalDataAnalysis.ipynb)

[versión en Español](Cuadernos_ES/Modulo07_MultimodalDataAnalisis.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo07_AnaliseDadosMultimodais.ipynb)

## Module 08 - TCR Profiling in Single-Cell Analysis: 

T cell receptor (TCR) profiling and Cellular Indexing of Transcriptomes and Epitopes by Sequencing (CITE-Seq) are pivotal techniques in single-cell research, offering unparalleled insights into the adaptive immune system and cellular heterogeneity. TCR profiling enables a deep dive into the repertoire and diversity of T cell populations, highlighting the specificity and uniqueness of T cell responses. On the other hand, CITE-Seq facilitates the concurrent assessment of transcriptomic data and protein expression within individual cells, creating a comprehensive portrayal of cellular states.

In this module, participants will explore the profound implications of TCR profiling in understanding immune responses and the synergies it can achieve when coupled with CITE-Seq. We'll initiate with core concepts and theories, and swiftly transition into practical applications using advanced computational tools. Through this hands-on approach, attendees will master the nuances of TCR profiling and CITE-Seq, equipping them with valuable tools for their immunological and single-cell research pursuits.

[English version](Notebooks_EN/Module08_TCRsequence.ipynb)

[versión en Español](Cuadernos_ES/Modulo08_SecuenciaTCR.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo08_SequenciamentoCelulaT.ipynb)

## Module 09 - An introduction to Spatial Transcriptomics approaches

Spatial transcriptomics is a rapidly evolving field that aims to provide a spatially resolved gene expression profile of a tissue or organ. This technology has the potential to advance our understanding of complex biological processes and help identify new biomarkers for disease diagnosis and treatment. 
The main goal of spatial transcriptomics is to capture the gene expression profile of individual cells (or a mini mixture of cells in a given region) in their native tissue context, allowing for the identification of cell types and their spatial distribution. This information can then be used to create detailed maps of gene expression within tissues, providing insights into cellular interactions, developmental processes, and disease progression. 
In this notebook, we will cover practical steps in setting up a spatial transcriptomics analysis pipeline using the Seurat package. We will cover the basic analysis to recover gene expression in different regions as well as cell type deconvolution approaches.

[English version](Notebooks_EN/Module09_SpatialTranscriptomics.ipynb)

[versión en Español](Cuadernos_ES/Modulo09_TranscriptomicaEspacial.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo09_TranscriptomicaEspacial.ipynb)

## Module 10 - An introduction to Single cell Assay for Transposase-Accessible Chromatin sequencing (scATAC-seq): 

scATAC-seq is a technique used to study chromatin accessibility at the single-cell level. Unlike scRNA-seq, which focuses on gene expression, scATAC-seq identifies regions of the genome that are open and potentially active, meaning they can be bound by transcription factors to regulate gene activity.

This method helps researchers understand gene regulation, identify enhancers and promoters, and explore epigenetic variations across different cell types or disease conditions. In this notebook, we utilize data from [Kumegawa et al. (2022)](https://biosignaling.biomedcentral.com/articles/10.1186/s12964-022-01029-5#:~:text=In%20this%20study%2C%20we%20identify%20genomic%20binding%20sites,GRHL2%20peaks%20is%20associated%20with%20ER%20binding%20sites.), which examined over 10,000 cells from 16 patients across different subtypes, including luminal, luminal-HER2, HER2+, and triple-negative. The study identified the GRHL2 transcription factor, which interacts with FOXA1 in endocrine resistance, regulating genes associated with metastasis and poor prognosis.

Using ArchR, an optimized tool for scATAC-seq analysis, we will process raw sequencing data, identify accessible chromatin regions, analyze transcription factor activity, and integrate scATAC-seq with scRNA-seq to explore gene regulation mechanisms. The notebook also includes a benchmarking step to compare integration methods, ensuring accurate data interpretation.

[English version](Notebooks_EN/Module10_scATACseq.ipynb)

[versión en Español](Cuadernos_ES/Modulo10_scATACseq.ipynb)

[Versão em Portugues](Cadernos_PT_BR/Modulo10_scATACseq.ipynb)


### Authorship and Acknowledgments:

This comprehensive material has been a result of collaborative efforts since 2021 and has been successfully employed in numerous courses organized by esteemed institutions like the Human Cell Atlas, LatinCells initiative, and Wellcome Connecting Sciences. We extend our heartfelt gratitude to all the individuals listed below, who have actively contributed to the development and refinement of this material over the years. Their dedication and expertise have been instrumental in making this resource valuable for the bioinformatics community.

We appreciate the continuous support and feedback from participants, mentors, and institutions that have made this endeavor possible. Together, we strive to advance the understanding and application of single-cell genomics in Latin America and the Caribbean.

**List of Contributors - Listed Alphabetically:**

- Adolfo Rojas
- Benilton S. Carvalho
- Bruno Vinagre
- Carlos Alberto Oliveira de Biagi Júnior
- Cesar Prada
- Cristóvão Antunes
- Daniela Russo
- Erick Armingol
- Gabriela Guimarães
- Leandro Santos
- Joyce Karoline Silva
- Mariana Boroni
- Orr Ashenberg
- Patricia Severino
- Raúl Arias-Carrasco
- Ricardo Khouri
- Sebastián Urquiza-Zurich
- Sergio Triana
- Vinicius Maracaja-Coutinho
- Yesid Cuesta


******
## License
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
