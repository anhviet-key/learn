/** @format */

import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { AxiosFetch } from './api/todo';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from '../store';
import {
  faChevronRight,
  faCheck,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { METHODS } from 'http';
import { useRouter } from 'next/router';
import { useTranslation, Trans } from 'react-i18next';
import { i18n } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectValue,
  fetchApi,
  addTodo,
  deleteTodo,
  updateTodo,
} from '../slices/counterSlice';

const Home: NextPage = () => {
  const lngs: any = {
    en: { nativeName: 'English' },
    vi: { nativeName: 'Vietnamese' },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const lists = useSelector(selectValue);

  const { t, i18n } = useTranslation();
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const [num, setNum] = useState<Number>(0);
  const [todo, setTodo] = useState<String>();
  const v1: any = useRef();
  const v2: any = useRef();

  const formEnter = async (e: any) => {
    if (e.key == 'Enter') {
      if (e.target.value !== '') {
        dispatch(addTodo({ title: e.target.value, status: true }));
        v2.current.value = '';
        v2.current.focus();
        refreshData();
      } else {
        return;
      }
    }
  };
  const handledelete = async (i: number) => {
    dispatch(deleteTodo(i));
    refreshData();
  };
  const handleCheck = async (item: any, i: number) => {
    var bool;
    item.status ? (bool = false) : (bool = true);
    dispatch(updateTodo({ id: i, title: item.title, status: bool }));
    refreshData();
  };
  const formClick = (e: any) => {
    e.preventDefault();
  };

  const handleEdit = (i: number) => {
    if (i != num) {
      v1.current.classList.toggle('block');
      setNum(i);
    } else {
      v1.current.classList.toggle('block');
    }
  };

  function EditInput(props: { value: any }) {
    const formEnterEdit = async (e: any) => {
      if (e.key == 'Enter') {
        if (e.target.value !== '') {
          dispatch(
            updateTodo({ id: props.value, title: e.target.value, status: true })
          );
          refreshData();
        } else {
          return;
        }
      }
    };

    return (
      <>
        <input
          type="text"
          id="formEdit"
          ref={v1}
          onKeyDown={(e) => formEnterEdit(e)}
          className={`${styles.formEdit} block`}
          placeholder=". . ."
          autoComplete="off"
          maxLength={47}
        />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Todo</title>
        <meta
          name="description"
          content="Todo app generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span>
        {Object.keys(lngs).map((lng: any) => (
          <>
            <button
              type="submit"
              id="btn"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}>
              {lngs[lng].nativeName}
            </button>
          </>
        ))}
      </span>
      <div className={styles.main}>
        <div className={styles.mainTitle}>{t('headers')}</div>
        <div className={styles.mainCard}>
          <div className={styles.mainCardIp}>
            <form method="POST" id="submitForm" onSubmit={(e) => formClick(e)}>
              <input
                type="text"
                name="todoInput"
                placeholder={`${t('description')}`}
                autoComplete="off"
                id="input"
                ref={v2}
                onKeyDown={(e) => formEnter(e)}
                maxLength={47}
              />
              <i className={styles.faChevronRight}>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </i>
            </form>
          </div>
          <div className={styles.mainCardCt}>
            <ul className={styles.ulList}>
              {lists !== null
                ? lists.map((item: any, index: number) => {
                    var i = 0;
                    i++;
                    return (
                      <>
                        {item.status ? (
                          <li className={styles.list} key={i}>
                            <div
                              onClick={() => handleCheck(item, index)}
                              className={styles.circle}>
                              <i className={styles.faCheck}>
                                <FontAwesomeIcon
                                  icon={faCheck}></FontAwesomeIcon>
                              </i>
                            </div>
                            <div className={styles.txt}>
                              {item.title}
                              {index == num && <EditInput value={num} />}
                            </div>
                            <div className={styles.option}>
                              <span
                                className={styles.linkEdit}
                                onClick={(e) => handleEdit(index)}>
                                <div
                                  className={`${styles.btn} ${styles.editItem}`}>
                                  <i>
                                    <FontAwesomeIcon
                                      icon={faPenToSquare}></FontAwesomeIcon>
                                  </i>
                                </div>
                              </span>
                              <span
                                className={styles.linkDel}
                                onClick={() => handledelete(index)}>
                                <div
                                  className={`${styles.btn} ${styles.deleItem}`}>
                                  <i>
                                    <FontAwesomeIcon
                                      icon={faTrashCan}></FontAwesomeIcon>
                                  </i>
                                </div>
                              </span>
                            </div>
                          </li>
                        ) : (
                          <li className={styles.list} key={i}>
                            <div
                              className={`${styles.circle} ${styles.active}`}
                              onClick={() => handleCheck(item, index)}
                              // className={`${styles.circle} ${
                              //   active ? styles.active : ""
                              // }`}
                            >
                              <i className={styles.faCheck}>
                                <FontAwesomeIcon
                                  icon={faCheck}></FontAwesomeIcon>
                              </i>
                            </div>
                            <div className={styles.txt}>
                              {item.title}
                              {index == num && <EditInput value={num} />}
                            </div>
                            <div className={styles.option}>
                              <span className={styles.linkEdit}>
                                <div
                                  className={`${styles.btn} ${styles.editItem}`}>
                                  <i>
                                    <FontAwesomeIcon
                                      icon={faPenToSquare}></FontAwesomeIcon>
                                  </i>
                                </div>
                              </span>
                              <span
                                className={styles.linkDel}
                                onClick={() => handledelete(index)}>
                                <div
                                  className={`${styles.btn} ${styles.deleItem}`}>
                                  <i>
                                    <FontAwesomeIcon
                                      icon={faTrashCan}></FontAwesomeIcon>
                                  </i>
                                </div>
                              </span>
                            </div>
                          </li>
                        )}
                      </>
                    );
                  })
                : ''}
            </ul>
          </div>
          <div className={styles.mainCardBt}>
            <div className={styles.left}>+ {t('item')}</div>
            <div className={styles.center}>
              <span className={styles.activeBtn}>All</span>
              <span className="">{t('active')}</span>
              <span className="">{t('complete')}</span>
            </div>
            <div className={styles.right}>{t('clear')}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
