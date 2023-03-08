import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonConfig } from '@collab/comp-library';
import { FileUploadService } from '../../services/file-upload.service';
import { FilesUploadedTableI } from './model/filesUploadedTable';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  @Input() public imagePath?: string;
  @Input() public typeOfFile?: string;
  @Input() public files!: Array<File>;
  @Input() public acceptedFileType!: string;
  @Input() public formControlName!: string;
  @Input() public errorExt!: boolean;
  @Input() public isSubmitted!: boolean;
  @Input() dataTypeList!: [{ name: string; value: string }];
  @Input() public noNotes!: boolean;
  @Input() public showExtraButton?: Boolean;
  @Input() public footerNotes?: string;
  @Input() public showExtraButtonPermission!: {
    page: string;
    permissionName: string;
  };

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() public onExtLink: EventEmitter<any> = new EventEmitter<any>();

  @ViewChildren('fileInput') fileInput!: QueryList<any>;

  public errorExtn: string[] = [];
  public uniquErrorExtn: string[] = [];
  public isMaxSizeExceeded = false;
  public totalFilesize = 0;
  public tableData: FilesUploadedTableI[] = [];
  public isErrorExtn!: boolean;
  public uploadAllTestCasesFilesError = false;
  public defectLogsCount = false;
  public raOutputFileCount = false;
  public testExecutionLogsCount = false;
  public duplicateFilesUploadedError = false;
  public browseButtonConfig: ButtonConfig = {
    text: 'Upload Files',
    buttonType: 'primary',
    buttonSize: 'small',
    iconURL: 'icon-Plus',
    iconPosition: 'left',
    imageUrl: '',
    linkURL: '',
  };
  public linkExternalButtonConfig: ButtonConfig = {
    text: 'Link External Source',
    buttonType: 'secondary',
    iconURL: '',
    imageUrl: 'assets/Vector.png',
    linkURL: '',
  };
  public addButtonConfig: ButtonConfig = {
    text: 'Add',
    buttonType: 'secondary',
    iconURL: '',
    imageUrl: '',
    linkURL: '',
  };

  constructor(
    private fileUploadService: FileUploadService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params?.['uploadedFile']) {
        this.tableData.push({
          documentName: params?.['uploadedFile'],
          documentSize: 0,
        });
      }
    });

    this.isErrorExtn = this.errorExt;
    this.fileUploadService.emitClearFileUploadTable$.subscribe(() => {
      this.clearAllTableData();
    });
  }

  /**
   * this method will upload the file
   * @returns {void}
   * @param {*} file
   * @memberof FileUploadComponent
   */
  public uploadFile(file: any): void {
    this.uniquErrorExtn = [];
    this.errorExtn = [];

    for (let index = 0; index < file.length; index++) {
      this.isMaxSizeExceeded = false;
      this.totalFilesize = this.totalFilesize + file[index].size;

      if (this.totalFilesize <= 10485760) {
        const element = file[index];
        const fileExtn = '.' + element.name.split('.').pop();
        const acceptedFileTypeArr = this.acceptedFileType.split(',');

        if (acceptedFileTypeArr.indexOf(fileExtn) === -1) {
          this.errorExtn.push(fileExtn.slice(1));
          this.uniquErrorExtn = [...new Set(this.errorExtn)];

          this.totalFilesize =
            Number(this.totalFilesize) < 0
              ? 0
              : Number(this.totalFilesize) - Number(element.size);
        } else {
          this.files = Array.from(this.files);

          if (
            (this.files && this.files.length < 1) ||
            (this.files && [...this.files].indexOf(element.name) === -1)
          ) {
            this.files.push(element);
          } else {
            alert('duplicate file');
          }

          this.tableData = [
            ...this.tableData,
            { documentName: element.name, documentSize: element.size },
          ];
        }
      } else {
        this.isMaxSizeExceeded = true;
        this.totalFilesize = this.totalFilesize - file[index].size;
        return;
      }
    }

    this.tableData.forEach((record, index) => {
      this.tableData[index]['id'] = index.toString();
    });
  }

  public deleteRow(id: any) {
    this.totalFilesize =
      Number(this.totalFilesize) < 0
        ? 0
        : Number(this.totalFilesize) -
          Number(this.tableData!.find((item) => item!.id === id)!.documentSize);
    this.tableData.splice(
      this.tableData.findIndex((item) => item.id === id),
      1
    );
    this.files.splice(Number(id), 1);
    this.fileInput.first.nativeElement.value = '';
    this.fileInput.last.nativeElement.value = '';
  }

  public clearAllTableData() {
    this.tableData.length = 0;
  }

  public OnLinkExternalClick() {
    this.onExtLink.emit();
  }
}
